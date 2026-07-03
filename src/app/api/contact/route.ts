import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1),
  budget:  z.string().min(1),
  message: z.string().min(20),
});

// Basic rate limiting (in-memory, resets on deploy)
const rateMap = new Map<string, { count: number; ts: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 1000; // 1 minute
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > window) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  // Rate limit
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 422 });
  }

  const { name, email, phone, company, service, budget, message } = parsed.data;

  // If RESEND_API_KEY is set, send real email. Otherwise log.
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Adverix Website <noreply@adverixmedia.com>",
          to: ["hello@adverixmedia.com"],
          reply_to: email,
          subject: `New Lead: ${service} — ${name}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#111;color:#f2f2f2;padding:32px;border-radius:12px;">
              <h2 style="color:#E63946;margin-top:0;">New Lead from Adverix Website</h2>
              <table style="width:100%;border-collapse:collapse;">
                ${[
                  ["Name",    name],
                  ["Email",   email],
                  ["Phone",   phone || "—"],
                  ["Company", company || "—"],
                  ["Service", service],
                  ["Budget",  budget],
                ].map(([k, v]) => `<tr><td style="padding:8px 0;color:#888;width:120px;">${k}</td><td style="padding:8px 0;">${v}</td></tr>`).join("")}
              </table>
              <div style="margin-top:20px;padding:16px;background:#1a1a1a;border-radius:8px;border-left:3px solid #E63946;">
                <p style="margin:0;font-weight:bold;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Message</p>
                <p style="margin:8px 0 0;font-size:14px;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
              </div>
            </div>
          `,
        }),
      });
      if (!emailRes.ok) throw new Error("Resend error");
    } catch (err) {
      console.error("Email send failed:", err);
      // Still return 200 so user doesn't get confused
    }
  } else if (process.env.NODE_ENV !== "production") {
    // Log to console only in development when email sending is not configured.
    console.log("📧 Contact Form Submission:", { name, email, phone, company, service, budget, message });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Glow */}
        <div className="absolute w-32 h-32 bg-[#E63946]/20 rounded-full blur-2xl animate-pulse-red" />
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-black/5 border-t-[#E63946] rounded-full animate-spin relative z-10" />
      </div>
      <p className="mt-8 font-heading font-bold text-sm tracking-[0.2em] uppercase text-[#111] animate-pulse">
        Loading<span className="text-[#E63946]">...</span>
      </p>
    </div>
  );
}

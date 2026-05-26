export function RiskLegend({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-4 text-[10px] text-slate-500 ${className}`}
    >
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-sm bg-emerald-500" />
        Low risk
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-sm bg-amber-500" />
        Moderate
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-sm bg-red-500" />
        High risk
      </span>
    </div>
  );
}

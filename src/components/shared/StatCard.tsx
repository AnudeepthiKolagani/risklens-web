import React from "react";

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/6 bg-slate-950/60 p-4 shadow-md backdrop-blur transition hover:scale-[1.01]">
      <p className="text-sm text-slate-300">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default StatCard;

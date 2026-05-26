import React from "react";

export function AIInsightCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/6 bg-slate-950/60 p-4 shadow-md backdrop-blur hover:shadow-[0_20px_60px_-30px_rgba(34,211,238,0.06)] transition">
      <h5 className="text-sm font-medium text-white">{title}</h5>
      <p className="mt-2 text-sm text-slate-300">{children}</p>
    </div>
  );
}

export default AIInsightCard;

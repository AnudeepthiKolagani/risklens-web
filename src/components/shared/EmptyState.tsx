import React from "react";

export function EmptyState({ message }: { message?: string }) {
  return (
    <div className="rounded-lg border border-white/6 bg-slate-900/50 p-8 text-center text-slate-300">
      <p className="text-lg font-medium">{message ?? "No data available"}</p>
      <p className="mt-2 text-sm text-slate-400">
        Upload portfolio files to begin AI-powered analysis.
      </p>
    </div>
  );
}

export default EmptyState;

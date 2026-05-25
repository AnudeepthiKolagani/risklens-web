import React from "react";

export function ScenarioCard({
  scenario,
  onOpen,
}: {
  scenario: any;
  onOpen?: () => void;
}) {
  return (
    <div
      className="flex h-full flex-col justify-between gap-3"
      onClick={onOpen}
    >
      <div>
        <p className="text-sm font-medium text-white">{scenario.title}</p>
        <p className="mt-2 text-sm text-slate-300">
          Estimated impact:{" "}
          <span className="font-semibold">{scenario.impact}</span>
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Affected: {scenario.sectors.join(", ")}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-slate-300">Severity</div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/4 px-3 py-1 text-sm font-semibold text-white">
          {scenario.severity}/10
        </div>
      </div>
    </div>
  );
}

export default ScenarioCard;

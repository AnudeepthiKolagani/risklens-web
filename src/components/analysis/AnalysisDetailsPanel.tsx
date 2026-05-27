import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TerminalPanel } from "@/components/ui/terminal-panel";
import type { AnalysisResult } from "@/types/analysis";

export function AnalysisDetailsPanel({ result }: { result: AnalysisResult }) {
  const [tab, setTab] = useState("insights");

  return (
    <TerminalPanel title="Report detail" ticker="RPT">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-3 border-0 bg-black/30 p-0.5">
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="confidence">Confidence</TabsTrigger>
        </TabsList>

        <TabsContent value="insights">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-sm uppercase tracking-wider text-slate-500">
                <th className="pb-2 pr-4">Title</th>
                <th className="pb-2">Conf.</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              {result.insights.map((ins) => (
                <tr key={ins.id} className="border-b border-white/[0.05]">
                  <td className="py-2 pr-4 text-slate-300">{ins.title}</td>
                  <td className="py-2 font-metrics text-amber-400/90">
                    {ins.confidence}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>

        <TabsContent value="issues">
          <ul className="space-y-2 text-sm">
            {result.anomalies.map((a) => (
              <li key={a.id} className="text-red-400/90">
                <span className="text-slate-300">{a.field}</span> — {a.description}
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="confidence">
          <p className="text-sm text-slate-400">
            Ensemble confidence:{" "}
            <span className="font-metrics font-semibold text-emerald-400">
              {result.confidenceGauge}%
            </span>
          </p>
        </TabsContent>
      </Tabs>
    </TerminalPanel>
  );
}

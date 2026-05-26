import { useEffect, useRef, useState } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { SectionHeader } from "../components/shared/SectionHeader";
import { ChatBubble } from "../components/shared/ChatBubble";
import { motion } from "framer-motion";

const seed = [
  { id: 1, from: "user", text: "Why is my portfolio risky?", time: "10:12" },
  {
    id: 2,
    from: "ai",
    text: "Your portfolio has high exposure to technology equities, increasing concentration risk during volatile market conditions.",
    time: "10:12",
  },
];

export function AICopilotPage() {
  const [messages, setMessages] = useState(seed);
  const [input, setInput] = useState("");
  const feedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    feedRef.current?.scrollTo({
      top: feedRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function send() {
    if (!input.trim()) return;
    const next = {
      id: Date.now(),
      from: "user",
      text: input,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((m) => [...m, next]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          from: "ai",
          text: "Analyzing exposure... recommended diversification into Healthcare and Consumer Staples.",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }, 1200);
  }

  return (
    <DashboardLayout fileCount={2} totalSize={1024}>
      <div className="space-y-6">
        <SectionHeader
          title="AI Copilot"
          subtitle="Ask RiskLens about your portfolio"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 rounded-2xl border border-white/6 bg-slate-950/60 p-4 shadow-lg backdrop-blur"
          >
            <div ref={feedRef} className="max-h-[60vh] overflow-y-auto p-4">
              {messages.map((m) => (
                <ChatBubble
                  key={m.id}
                  from={m.from as any}
                  text={m.text}
                  time={m.time}
                />
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-2xl bg-slate-900/60 px-4 py-3 text-slate-200"
                placeholder="Ask something like 'How can I diversify?'"
              />
              <button
                onClick={send}
                className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900"
              >
                Send
              </button>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div className="rounded-2xl border border-white/6 bg-slate-950/60 p-4 shadow-lg backdrop-blur">
              <h4 className="text-sm font-medium text-slate-300">
                Suggested Prompts
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Why is my portfolio risky?</li>
                <li>How can I diversify?</li>
                <li>What sectors dominate my portfolio?</li>
                <li>What happens during a market crash?</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AICopilotPage;

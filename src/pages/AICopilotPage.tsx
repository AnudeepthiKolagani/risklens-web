import { useEffect, useRef, useState } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles, User } from "lucide-react";

const seed = [
  {
    id: 1,
    from: "user",
    text: "Why is my portfolio risky?",
    time: "10:12",
  },
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
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
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
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1200);
  }

  return (
    <DashboardLayout fileCount={2} totalSize={1024}>
      <div className="flex h-[calc(100vh-72px)] flex-col overflow-hidden bg-[#0b0b0c] text-white">
        {/* Compact Header */}
        <div className="border-b border-white/[0.04] px-4 py-2">
          <div className="mx-auto flex  items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              </div>

              <h3 className="text-2xl font-medium text-cyan-400">AI Copilot</h3>
            </div>

            <div className="text-sm text-slate-600">RiskLens Assistant</div>
          </div>
        </div>

        {/* Chat Feed */}
        <div ref={feedRef} className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-4xl flex-col px-6 py-5">
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                className={`mb-6 flex gap-3 ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* AI Avatar */}
                {m.from === "ai" && (
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                  </div>
                )}

                {/* Message */}
                <div
                  className={`max-w-[720px] px-4 py-3 ${
                    m.from === "user"
                      ? "rounded-2xl bg-cyan-400 text-black"
                      : "text-slate-300"
                  }`}
                >
                  <p className="text-base leading-7 tracking-[0.01em]">
                    {m.text}
                  </p>

                  <div
                    className={`mt-2 text-sm ${
                      m.from === "user" ? "text-black" : "text-slate-200"
                    }`}
                  >
                    {m.time}
                  </div>
                </div>

                {/* User Avatar */}
                {m.from === "user" && (
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                    <User className="h-4 w-4 text-cyan-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        {messages.length < 3 && (
          <div className="mx-auto mb-4 grid w-full max-w-3xl grid-cols-1 gap-3 px-6 md:grid-cols-2">
            {[
              "Why is my portfolio risky?",
              "How can I diversify?",
              "What sectors dominate my portfolio?",
              "How resilient is my portfolio?",
            ].map((prompt) => (
              <button
                key={prompt}
                onClick={() => setInput(prompt)}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-left text-sm text-slate-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-slate-200"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-white/[0.05] px-4 py-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-end gap-3 rounded-3xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 backdrop-blur-xl">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask RiskLens..."
                className="max-h-40 flex-1 resize-none bg-transparent py-2 text-[15px] leading-7 text-slate-200 outline-none placeholder:text-slate-600"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
              />

              <button
                onClick={send}
                className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-300 text-black transition hover:scale-[1.03]"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-center text-sm text-slate-600">
              AI can make mistakes. Verify important financial decisions.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AICopilotPage;

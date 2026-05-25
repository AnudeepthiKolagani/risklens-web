import React from "react";

export function ChatBubble({
  from,
  text,
  time,
}: {
  from: "user" | "ai";
  text: string;
  time?: string;
}) {
  const isUser = from === "user";
  return (
    <div className={`mb-3 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[72%] rounded-2xl p-3 ${isUser ? "bg-cyan-500 text-slate-900" : "bg-slate-900/60 text-slate-200"}`}
      >
        <div className="text-sm">{text}</div>
        <div className="mt-1 text-right text-xs text-slate-400">{time}</div>
      </div>
    </div>
  );
}

export default ChatBubble;

import { ReactNode } from "react";

interface TerminalPanelProps {
  title: string;
  subtitle?: string;
  ticker?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

/** Bloomberg-style chart/widget frame — orange header rail, dark body */
export function TerminalPanel({
  title,
  subtitle,
  ticker,
  children,
  className = "",
  bodyClassName = "",
}: TerminalPanelProps) {
  return (
    <section className={`bloomberg-panel overflow-hidden ${className}`}>
      <header className="flex items-center justify-between border-b border-[#ff9900]/25 bg-[#0c1018] px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-4 w-[3px] shrink-0 rounded-full bg-[#ff9900]" aria-hidden />
          <div className="min-w-0">
            <h3 className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ff9900]">
              {title}
            </h3>
            {subtitle && (
              <p className="truncate text-[10px] text-slate-500">{subtitle}</p>
            )}
          </div>
        </div>
        {ticker && (
          <span className="shrink-0 font-metrics text-[10px] text-slate-400">
            {ticker}
          </span>
        )}
      </header>
      <div className={`bloomberg-panel-body p-3 ${bodyClassName}`}>{children}</div>
    </section>
  );
}

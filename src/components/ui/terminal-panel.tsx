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
      <header className="flex items-center justify-between border-b border-cyan-400/25 bg-[#0c1018] px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-12 w-[3px] shrink-0 rounded-full bg-cyan-400" aria-hidden />
          <div className="min-w-0">
            <h3 className="truncate text-md font-bold uppercase text-cyan-400">
              {title}
            </h3>
            {subtitle && (
              <p className="truncate text-sm text-slate-500 mt-2">{subtitle}</p>
            )}
          </div>
        </div>
        {ticker && (
          <span className="shrink-0 font-metrics text-sm text-slate-400">
            {ticker}
          </span>
        )}
      </header>
      <div className={`bloomberg-panel-body p-3 ${bodyClassName}`}>{children}</div>
    </section>
  );
}

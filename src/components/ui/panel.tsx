import { ReactNode } from "react";

interface PanelProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  noPadding?: boolean;
}

/** Quiet container — single hierarchy, no badges or accent headers */
export function Panel({
  title,
  subtitle,
  children,
  className = "",
  bodyClassName = "",
  noPadding = false,
}: PanelProps) {
  return (
    <section
      className={`rounded-lg border border-white/[0.06] bg-slate-900/30 ${className}`}
    >
      {(title || subtitle) && (
        <header className="border-b border-white/[0.05] px-4 py-3">
          {title && (
            <h3 className="text-sm font-medium text-slate-200">{title}</h3>
          )}
          {subtitle && (
            <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
          )}
        </header>
      )}
      <div className={noPadding ? bodyClassName : `p-4 ${bodyClassName}`}>
        {children}
      </div>
    </section>
  );
}

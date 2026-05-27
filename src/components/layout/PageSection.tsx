import { ReactNode } from "react";

interface PageSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function PageSection({
  title,
  description,
  children,
  className = "",
}: PageSectionProps) {
  return (
    <section className={`space-y-4 ${className}`}>
      <div>
        <h2 className="text-base font-semibold text-slate-200">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}

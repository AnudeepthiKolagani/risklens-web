import { ReactNode } from "react";
import { Panel } from "@/components/ui/panel";

/** @deprecated Use Panel — kept for gradual migration */
export function BloombergChartFrame({
  title,
  subtitle,
  children,
  className = "",
  height = "",
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  height?: string;
}) {
  return (
    <Panel
      title={title}
      subtitle={subtitle}
      className={className}
      bodyClassName={height}
    >
      {children}
    </Panel>
  );
}

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartPanelProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ChartPanel({
  title,
  subtitle,
  children,
  className = "",
  delay = 0,
}: ChartPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={className}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {subtitle && (
            <p className="font-mono text-[9px] text-slate-500">{subtitle}</p>
          )}
        </CardHeader>
        <CardContent className="min-h-[180px]">{children}</CardContent>
      </Card>
    </motion.div>
  );
}

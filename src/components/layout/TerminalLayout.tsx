import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

interface TerminalLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  fileCount?: number;
  totalSize?: number;
}

export function TerminalLayout({
  children,
  title,
  subtitle,
  fileCount = 0,
  totalSize = 0,
}: TerminalLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="terminal-bg min-h-screen text-slate-100">
      <div className="relative mx-auto flex min-h-screen gap-3 p-3 lg:gap-4 lg:p-4">
        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed((c) => !c)}
        />

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <Navbar
            title={title}
            subtitle={subtitle}
            fileCount={fileCount}
            totalSize={totalSize}
          />
          <main className="flex-1 space-y-5">{children}</main>
        </div>
      </div>
    </div>
  );
}

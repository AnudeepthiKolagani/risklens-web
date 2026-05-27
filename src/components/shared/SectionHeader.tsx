import React from "react";

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <p className="text-lg font-bold uppercase tracking-[0.1em] text-cyan-300/80">
        {subtitle}
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2>
    </div>
  );
}

export default SectionHeader;

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
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
        {subtitle}
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2>
    </div>
  );
}

export default SectionHeader;

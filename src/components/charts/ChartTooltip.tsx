import type { TooltipProps } from "recharts";
import {
  tooltipItemStyle,
  tooltipLabelStyle,
  tooltipWrapperStyle,
} from "@/utils/chartTheme";

type ChartTooltipProps = TooltipProps<number, string>;

export function ChartTooltip({
  active,
  payload,
  label,
}: ChartTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div style={tooltipWrapperStyle} className="chart-tooltip">
      {label != null && (
        <p style={tooltipLabelStyle}>{String(label)}</p>
      )}
      <ul className="mt-1 space-y-0.5">
        {payload.map((entry) => (
          <li
            key={`${entry.name}-${entry.dataKey}`}
            style={{
              ...tooltipItemStyle,
              color: entry.color ?? tooltipItemStyle.color,
            }}
          >
            <span style={{ color: "#94a3b8" }}>{entry.name}: </span>
            <span style={{ fontWeight: 600 }}>
              {typeof entry.value === "number"
                ? entry.value.toLocaleString()
                : String(entry.value ?? "—")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

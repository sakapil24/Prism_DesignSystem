/**
 * CRM Design System Example — Chart Primitives
 *
 * Base wrapper, tooltip, and legend for Recharts integration.
 * Provides token-based color palette.
 */

import * as React from 'react';
import { ResponsiveContainer, Tooltip as RechartsTooltip, Legend as RechartsLegend } from 'recharts';
import { cn } from '../utils/cn';

/* ─── Color Palette ──────────────────────────────────────────────────── */

export const CHART_COLORS = [
  '#AB342B', // blue-500
  '#1F8056', // green-500
  '#B27316', // amber-500
  '#D21905', // red-500
  '#9B69FF', // purple-400
  '#00B9EB', // cyan-400
  '#FA4B94', // pink-400
  '#F97516', // orange-500
] as const;

export function getChartColor(index: number): string {
  return CHART_COLORS[index % CHART_COLORS.length];
}

/* ─── Chart Container ────────────────────────────────────────────────── */

export interface ChartContainerProps {
  children: React.ReactElement;
  height?: number;
  className?: string;
}

function ChartContainer({ children, height = 300, className }: ChartContainerProps) {
  return (
    <div className={cn('w-full', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

ChartContainer.displayName = 'ChartContainer';

/* ─── Custom Tooltip ─────────────────────────────────────────────────── */

export interface ChartTooltipContentProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    dataKey: string;
  }>;
  label?: string;
  formatter?: (value: number, name: string) => string;
}

function ChartTooltipContent({ active, payload, label, formatter }: ChartTooltipContentProps) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className={cn(
        'rounded-[var(--radius)] bg-[var(--surface-elevated)] px-3 py-2',
        'shadow-[var(--shadow-popover)]',
        'border border-[var(--border-subtle)]',
        'text-[var(--text-sm)]'
      )}
    >
      {label && (
        <p className="mb-1 font-[var(--font-medium)] text-[var(--text-primary)]">{label}</p>
      )}
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2 py-0.5">
          <span
            className="h-2 w-2 rounded-full shrink-0"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-[var(--text-secondary)]">{entry.name}:</span>
          <span className="font-[var(--font-medium)] text-[var(--text-primary)]">
            {formatter ? formatter(entry.value, entry.name) : entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Convenience Wrappers ───────────────────────────────────────────── */

function ChartTooltip(props: Omit<React.ComponentProps<typeof RechartsTooltip>, 'content'> & { formatter?: (value: number, name: string) => string }) {
  const { formatter, ...rest } = props;
  return (
    <RechartsTooltip
      content={<ChartTooltipContent formatter={formatter} />}
      cursor={{ fill: 'var(--surface-hover)' }}
      {...rest}
    />
  );
}

function ChartLegend(props: React.ComponentProps<typeof RechartsLegend>) {
  return (
    <RechartsLegend
      iconType="circle"
      iconSize={8}
      wrapperStyle={{
        fontSize: 'var(--text-sm)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-secondary)',
        paddingTop: '8px',
      }}
      {...props}
    />
  );
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend };

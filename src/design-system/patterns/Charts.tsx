/**
 * CRM Design System Example — Chart Patterns
 *
 * Pre-configured Recharts wrappers with design system tokens.
 */

import * as React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  AreaChart as RechartsAreaChart,
  Area,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart as RechartsSparkLine,
  Line as SparkLineLine,
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartLegend, CHART_COLORS, getChartColor } from '../components/Chart';
import { cn } from '../utils/cn';

/* ─── Shared Axis Config ─────────────────────────────────────────────── */

const axisStyle = {
  fontSize: 11,
  fontFamily: 'var(--font-sans)',
  fill: 'var(--text-muted)',
};

const gridStyle = {
  strokeDasharray: '3 3',
  stroke: 'var(--border-faint)',
};

/* ─── BarChart ───────────────────────────────────────────────────────── */

export interface BarChartBar {
  dataKey: string;
  name?: string;
  color?: string;
  stackId?: string;
}

export interface BarChartProps {
  data: Record<string, unknown>[];
  bars: BarChartBar[];
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

function BarChart({
  data,
  bars,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = false,
  layout = 'horizontal',
  className,
}: BarChartProps) {
  return (
    <ChartContainer height={height} className={className}>
      <RechartsBarChart data={data} layout={layout === 'vertical' ? 'vertical' : undefined}>
        {showGrid && <CartesianGrid {...gridStyle} />}
        {layout === 'vertical' ? (
          <>
            <XAxis type="number" tick={axisStyle} axisLine={false} tickLine={false} />
            <YAxis dataKey={xAxisKey} type="category" tick={axisStyle} axisLine={false} tickLine={false} width={80} />
          </>
        ) : (
          <>
            <XAxis dataKey={xAxisKey} tick={axisStyle} axisLine={false} tickLine={false} />
            <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
          </>
        )}
        <ChartTooltip />
        {showLegend && <ChartLegend />}
        {bars.map((bar, i) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            name={bar.name ?? bar.dataKey}
            fill={bar.color ?? getChartColor(i)}
            radius={[4, 4, 0, 0]}
            stackId={bar.stackId}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  );
}

/* ─── LineChart ───────────────────────────────────────────────────────── */

export interface LineChartLine {
  dataKey: string;
  name?: string;
  color?: string;
  dashed?: boolean;
}

export interface LineChartProps {
  data: Record<string, unknown>[];
  lines: LineChartLine[];
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  curved?: boolean;
  className?: string;
}

function LineChart({
  data,
  lines,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = false,
  curved = true,
  className,
}: LineChartProps) {
  return (
    <ChartContainer height={height} className={className}>
      <RechartsLineChart data={data}>
        {showGrid && <CartesianGrid {...gridStyle} />}
        <XAxis dataKey={xAxisKey} tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
        <ChartTooltip />
        {showLegend && <ChartLegend />}
        {lines.map((line, i) => (
          <Line
            key={line.dataKey}
            type={curved ? 'monotone' : 'linear'}
            dataKey={line.dataKey}
            name={line.name ?? line.dataKey}
            stroke={line.color ?? getChartColor(i)}
            strokeWidth={2}
            strokeDasharray={line.dashed ? '5 5' : undefined}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 2 }}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
}

/* ─── AreaChart ───────────────────────────────────────────────────────── */

export interface AreaChartArea {
  dataKey: string;
  name?: string;
  color?: string;
  opacity?: number;
  stackId?: string;
}

export interface AreaChartProps {
  data: Record<string, unknown>[];
  areas: AreaChartArea[];
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  className?: string;
}

function AreaChart({
  data,
  areas,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = false,
  className,
}: AreaChartProps) {
  return (
    <ChartContainer height={height} className={className}>
      <RechartsAreaChart data={data}>
        {showGrid && <CartesianGrid {...gridStyle} />}
        <XAxis dataKey={xAxisKey} tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
        <ChartTooltip />
        {showLegend && <ChartLegend />}
        {areas.map((area, i) => {
          const color = area.color ?? getChartColor(i);
          return (
            <Area
              key={area.dataKey}
              type="monotone"
              dataKey={area.dataKey}
              name={area.name ?? area.dataKey}
              stroke={color}
              strokeWidth={2}
              fill={color}
              fillOpacity={area.opacity ?? 0.15}
              stackId={area.stackId}
            />
          );
        })}
      </RechartsAreaChart>
    </ChartContainer>
  );
}

/* ─── PieChart / DonutChart ──────────────────────────────────────────── */

export interface PieChartDataItem {
  name: string;
  value: number;
  color?: string;
}

export interface PieChartProps {
  data: PieChartDataItem[];
  height?: number;
  innerRadius?: number;
  showLegend?: boolean;
  className?: string;
}

function PieChart({
  data,
  height = 300,
  innerRadius = 0,
  showLegend = true,
  className,
}: PieChartProps) {
  return (
    <ChartContainer height={height} className={className}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius="80%"
          dataKey="value"
          nameKey="name"
          strokeWidth={2}
          stroke="var(--surface-page)"
        >
          {data.map((entry, i) => (
            <Cell key={entry.name} fill={entry.color ?? getChartColor(i)} />
          ))}
        </Pie>
        <ChartTooltip />
        {showLegend && <ChartLegend />}
      </RechartsPieChart>
    </ChartContainer>
  );
}

function DonutChart(props: PieChartProps) {
  return <PieChart {...props} innerRadius={props.innerRadius ?? 60} />;
}

/* ─── SparkLine ──────────────────────────────────────────────────────── */

export interface SparkLineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

function SparkLine({
  data,
  color = CHART_COLORS[0],
  width = 100,
  height = 32,
  className,
}: SparkLineProps) {
  const chartData = data.map((value, index) => ({ index, value }));

  return (
    <div className={cn('inline-block', className)} style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsSparkLine data={chartData}>
          <SparkLineLine
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.5}
            dot={false}
          />
        </RechartsSparkLine>
      </ResponsiveContainer>
    </div>
  );
}

/* ─── Exports ────────────────────────────────────────────────────────── */

BarChart.displayName = 'BarChart';
LineChart.displayName = 'LineChart';
AreaChart.displayName = 'AreaChart';
PieChart.displayName = 'PieChart';
DonutChart.displayName = 'DonutChart';
SparkLine.displayName = 'SparkLine';

export { BarChart, LineChart, AreaChart, PieChart, DonutChart, SparkLine };

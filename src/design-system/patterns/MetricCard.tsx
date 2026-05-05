import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Metric Card (Highlight Card) ─── */
interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label: string;
  /** Primary value */
  value: React.ReactNode;
  /** Optional description below value */
  description?: string;
  /** Icon in the top-right corner */
  icon?: React.ReactNode;
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, label, value, description, icon, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-2 p-4 rounded-[var(--radius-xl)]',
        'shadow-[var(--shadow-border)]',
        'bg-[var(--surface-page)]',
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <span className="text-[12px] font-medium text-[var(--text-muted)]">{label}</span>
        {icon && (
          <span className="text-[var(--icon-muted)] flex-shrink-0">{icon}</span>
        )}
      </div>
      <div className="text-[14px] font-medium text-[var(--text-primary)]">{value}</div>
      {description && (
        <span className="text-[12px] text-[var(--text-faint)]">{description}</span>
      )}
    </div>
  ),
);
MetricCard.displayName = 'MetricCard';

export { MetricCard };
export type { MetricCardProps };

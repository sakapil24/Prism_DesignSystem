import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Filter Chip ─── */
interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the filter is currently active */
  active?: boolean;
  /** Handler to remove this filter */
  onRemove?: () => void;
}

const FilterChip = React.forwardRef<HTMLButtonElement, FilterChipProps>(
  ({ className, active, onRemove, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 h-7 px-2.5 rounded-[var(--radius)]',
        'text-[14px] font-medium',
        'transition-colors duration-[160ms] cursor-pointer select-none',
        active
          ? 'bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] shadow-[var(--shadow-border)]'
          : 'text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-secondary)]',
        className,
      )}
      {...props}
    >
      {children}
      {active && onRemove && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.stopPropagation();
              onRemove();
            }
          }}
          className="flex items-center justify-center w-3.5 h-3.5 rounded-full hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1L7 7M7 1L1 7" />
          </svg>
        </span>
      )}
    </button>
  ),
);
FilterChip.displayName = 'FilterChip';

/* ─── Filter Bar ─── */
interface FilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left side content (sort, filter buttons) */
  filters?: React.ReactNode;
  /** Right side actions */
  actions?: React.ReactNode;
}

const FilterBar = React.forwardRef<HTMLDivElement, FilterBarProps>(
  ({ className, filters, actions, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-2 px-4 h-10 border-b border-[var(--border-subtle)] flex-shrink-0',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-1 flex-1 min-w-0 overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {filters ?? children}
        </div>
      </div>
      {actions && (
        <div className="flex items-center gap-2 flex-shrink-0">{actions}</div>
      )}
    </div>
  ),
);
FilterBar.displayName = 'FilterBar';

export { FilterBar, FilterChip };
export type { FilterBarProps, FilterChipProps };

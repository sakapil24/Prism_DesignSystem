import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Timeline Item ─── */
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon/avatar in the gutter */
  icon?: React.ReactNode;
  /** Timestamp text */
  timestamp?: string;
  /** Whether this is the last item (hides connector line) */
  isLast?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, icon, timestamp, isLast, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex gap-3 relative', className)} {...props}>
      {/* Gutter */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--surface-muted)] text-[var(--icon-muted)]">
          {icon ?? (
            <div className="w-2 h-2 rounded-full bg-[var(--border-default)]" />
          )}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-[var(--border-subtle)] mt-1" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-4 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="text-[14px] font-medium text-[var(--text-primary)] min-w-0">
            {children}
          </div>
          {timestamp && (
            <span className="text-[12px] text-[var(--text-faint)] flex-shrink-0 whitespace-nowrap">
              {timestamp}
            </span>
          )}
        </div>
      </div>
    </div>
  ),
);
TimelineItem.displayName = 'TimelineItem';

/* ─── Activity Timeline ─── */
interface ActivityTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional "View all" handler */
  onViewAll?: () => void;
}

const ActivityTimeline = React.forwardRef<HTMLDivElement, ActivityTimelineProps>(
  ({ className, onViewAll, children, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props}>
      {children}
      {onViewAll && (
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer transition-colors mt-1 ml-9"
        >
          View all
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4.5 3L7.5 6L4.5 9" />
          </svg>
        </button>
      )}
    </div>
  ),
);
ActivityTimeline.displayName = 'ActivityTimeline';

export { ActivityTimeline, TimelineItem };
export type { ActivityTimelineProps, TimelineItemProps };

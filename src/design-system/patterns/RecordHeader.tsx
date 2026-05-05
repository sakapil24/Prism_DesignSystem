import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Record Header ─── */
interface RecordHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar/icon element */
  avatar?: React.ReactNode;
  /** Record name */
  name: string;
  /** Subtitle/type label */
  subtitle?: string;
  /** Badges/tags */
  badges?: React.ReactNode;
  /** Right-side actions */
  actions?: React.ReactNode;
}

const RecordHeader = React.forwardRef<HTMLDivElement, RecordHeaderProps>(
  ({ className, avatar, name, subtitle, badges, actions, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-start gap-3 px-6 py-4', className)}
      {...props}
    >
      {avatar && <div className="flex-shrink-0 mt-0.5">{avatar}</div>}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h1 className="text-[16px] font-semibold text-[var(--text-primary)] truncate">
            {name}
          </h1>
        </div>
        {subtitle && (
          <p className="text-[14px] text-[var(--text-muted)] mt-0.5">{subtitle}</p>
        )}
        {badges && <div className="flex flex-wrap gap-1 mt-2">{badges}</div>}
      </div>
      {actions && (
        <div className="flex items-center gap-2 flex-shrink-0">{actions}</div>
      )}
    </div>
  ),
);
RecordHeader.displayName = 'RecordHeader';

export { RecordHeader };
export type { RecordHeaderProps };

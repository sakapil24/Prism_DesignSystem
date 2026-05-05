import * as React from 'react';
import { cn } from '../utils/cn';

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon element rendered above the title */
  icon?: React.ReactNode;
  /** Primary title text */
  title: string;
  /** Description text below the title */
  description?: string;
  /** Action element (button, link) rendered below description */
  action?: React.ReactNode;
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center justify-center py-12 px-6 text-center',
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-3 text-[var(--icon-muted)]">
          {icon}
        </div>
      )}
      <h3 className="text-[14px] font-medium text-[var(--text-primary)] mb-1">
        {title}
      </h3>
      {description && (
        <p className="text-[14px] text-[var(--text-muted)] max-w-sm mb-4">
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  ),
);
EmptyState.displayName = 'EmptyState';

export { EmptyState };
export type { EmptyStateProps };

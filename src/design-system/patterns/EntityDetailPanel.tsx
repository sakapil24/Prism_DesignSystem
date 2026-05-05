import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Detail Field Row ─── */
interface DetailFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field label */
  label: string;
  /** Field icon */
  icon?: React.ReactNode;
}

const DetailField = React.forwardRef<HTMLDivElement, DetailFieldProps>(
  ({ className, label, icon, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-start gap-3 py-2 min-h-[32px]', className)}
      {...props}
    >
      <div className="flex items-center gap-2 w-[120px] flex-shrink-0">
        {icon && (
          <span className="w-4 h-4 flex items-center justify-center text-[var(--icon-muted)]">
            {icon}
          </span>
        )}
        <span className="text-[14px] font-medium text-[var(--text-muted)] truncate">
          {label}
        </span>
      </div>
      <div className="flex-1 text-[14px] text-[var(--text-primary)] min-w-0">
        {children}
      </div>
    </div>
  ),
);
DetailField.displayName = 'DetailField';

/* ─── Detail Section ─── */
interface DetailSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  actions?: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

function DetailSection({
  className,
  title,
  actions,
  collapsible = false,
  defaultOpen = true,
  children,
  ...props
}: DetailSectionProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className={cn('border-b border-[var(--border-subtle)] last:border-b-0', className)} {...props}>
      <div
        className={cn(
          'flex items-center justify-between px-5 py-3',
          collapsible && 'cursor-pointer select-none',
        )}
        onClick={collapsible ? () => setOpen(!open) : undefined}
      >
        <div className="flex items-center gap-2">
          {collapsible && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className={cn(
                'text-[var(--icon-muted)] transition-transform duration-[160ms]',
                open && 'rotate-90',
              )}
            >
              <path d="M4.5 3L7.5 6L4.5 9" />
            </svg>
          )}
          <h3 className="text-[14px] font-semibold text-[var(--text-primary)]">{title}</h3>
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      {open && <div className="px-5 pb-3">{children}</div>}
    </div>
  );
}

/* ─── Entity Detail Panel ─── */
const EntityDetailPanel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col', className)} {...props}>
      {children}
    </div>
  ),
);
EntityDetailPanel.displayName = 'EntityDetailPanel';

export { EntityDetailPanel, DetailSection, DetailField };
export type { DetailFieldProps, DetailSectionProps };

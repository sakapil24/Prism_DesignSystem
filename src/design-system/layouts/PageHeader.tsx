import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Topbar ─── */
interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left content (breadcrumb, title) */
  left?: React.ReactNode;
  /** Right content (actions, avatar) */
  right?: React.ReactNode;
  /** Hamburger menu click handler (shown on mobile) */
  onMenuClick?: () => void;
}

const Topbar = React.forwardRef<HTMLDivElement, TopbarProps>(
  ({ className, left, right, onMenuClick, children, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        'flex items-center justify-between h-[var(--topbar-height)] px-3 lg:px-4 flex-shrink-0',
        'border-b border-[var(--border-subtle)]',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 min-w-0">
        {/* Expand sidebar toggle — mobile only (matches sample CRM's production pattern) */}
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className={cn(
              'inline-flex items-center justify-center w-7 h-7 rounded-[var(--radius-md)] lg:hidden',
              'text-[var(--icon-default)] hover:bg-[var(--surface-hover)]',
              'transition-colors duration-[var(--duration-fast)]',
            )}
            aria-label="Expand sidebar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="12" height="12" rx="2" />
              <path d="M6 2v12" />
              <path d="M9 7l2 1-2 1" />
            </svg>
          </button>
        )}
        {left ?? children}
      </div>
      {right && <div className="flex items-center gap-2 flex-shrink-0">{right}</div>}
    </header>
  ),
);
Topbar.displayName = 'Topbar';

/* ─── Page Header ─── */
interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Page title */
  title: string;
  /** Optional subtitle/description */
  description?: string;
  /** Leading icon/avatar */
  icon?: React.ReactNode;
  /** Right-side actions */
  actions?: React.ReactNode;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, title, description, icon, actions, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4', className)}
      {...props}
    >
      <div className="flex items-center gap-3 min-w-0">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="min-w-0">
          <h1 className="text-[16px] font-semibold text-[var(--text-primary)] truncate">
            {title}
          </h1>
          {description && (
            <p className="text-[14px] text-[var(--text-muted)] truncate">{description}</p>
          )}
        </div>
      </div>
      {actions && <div className="flex items-center gap-2 flex-shrink-0">{actions}</div>}
    </div>
  ),
);
PageHeader.displayName = 'PageHeader';

/* ─── Section Header ─── */
interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  count?: number;
  actions?: React.ReactNode;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, count, actions, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between py-2', className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <h2 className="text-[14px] font-medium text-[var(--text-primary)]">{title}</h2>
        {count !== undefined && (
          <span className="text-[12px] text-[var(--text-faint)] tabular-nums">{count}</span>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  ),
);
SectionHeader.displayName = 'SectionHeader';

/* ─── Toolbar ─── */
const Toolbar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-2 px-3 lg:px-4 h-10 border-b border-[var(--border-subtle)] flex-shrink-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Toolbar.displayName = 'Toolbar';

export { Topbar, PageHeader, SectionHeader, Toolbar };
export type { TopbarProps, PageHeaderProps, SectionHeaderProps };

/**
 * CRM Design System Example — Entity Action Bar
 *
 * The bar at the top of detail/record pages showing:
 * - Back/close button
 * - Breadcrumb ("Companies > Acme Corp")
 * - Entity actions (Edit, Email, Delete, overflow menu)
 *
 * Height: --topbar-height (44px), border-bottom.
 *
 * Observed on: Company detail, Deal detail
 * Screenshot ref: company-detail-overview.png (top bar zone)
 */

import * as React from 'react';
import { cn } from '../utils/cn';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface EntityActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Back/close button click handler */
  onBack?: () => void;
  /** Breadcrumb path items */
  breadcrumbs?: BreadcrumbItem[];
  /** Right-side entity actions */
  actions?: React.ReactNode;
}

const EntityActionBar = React.forwardRef<HTMLDivElement, EntityActionBarProps>(
  ({ className, onBack, breadcrumbs, actions, children, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        'flex items-center justify-between h-[var(--topbar-height)] px-3 lg:px-4 flex-shrink-0',
        'border-b border-[var(--border-subtle)]',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5 lg:gap-2 min-w-0">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className={cn(
              'inline-flex items-center justify-center w-7 h-7 rounded-[var(--radius-md)]',
              'text-[var(--icon-default)] hover:bg-[var(--surface-hover)]',
              'transition-colors duration-[var(--duration-fast)]',
            )}
            aria-label="Go back"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M9.78 4.22a.75.75 0 010 1.06L7.06 8l2.72 2.72a.75.75 0 11-1.06 1.06L5.47 8.53a.75.75 0 010-1.06l3.25-3.25a.75.75 0 011.06 0z" />
            </svg>
          </button>
        )}

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 min-w-0 text-[14px]" aria-label="Breadcrumb">
            {breadcrumbs.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    className="text-[var(--text-faint)] shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M4.5 2.5l3.5 3.5-3.5 3.5" />
                  </svg>
                )}
                {item.href || item.onClick ? (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className={cn(
                      'truncate hover:text-[var(--text-primary)]',
                      'transition-colors duration-[var(--duration-fast)]',
                      i === breadcrumbs.length - 1
                        ? 'text-[var(--text-primary)] font-medium'
                        : 'text-[var(--text-muted)]',
                    )}
                  >
                    {item.label}
                  </button>
                ) : (
                  <span
                    className={cn(
                      'truncate',
                      i === breadcrumbs.length - 1
                        ? 'text-[var(--text-primary)] font-medium'
                        : 'text-[var(--text-muted)]',
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {children}
      </div>

      {actions && <div className="flex items-center gap-1.5 lg:gap-2 flex-shrink-0">{actions}</div>}
    </header>
  ),
);
EntityActionBar.displayName = 'EntityActionBar';

export { EntityActionBar };
export type { EntityActionBarProps, BreadcrumbItem };

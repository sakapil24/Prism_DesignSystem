import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Content Layout ─── */
interface ContentLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max width constraint */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const contentMaxWidths = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  full: 'max-w-full',
};

const ContentLayout = React.forwardRef<HTMLDivElement, ContentLayoutProps>(
  ({ className, maxWidth = 'lg', children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex-1 overflow-y-auto',
        className,
      )}
      {...props}
    >
      <div className={cn('mx-auto px-4 lg:px-6 py-4 lg:py-5', contentMaxWidths[maxWidth])}>
        {children}
      </div>
    </div>
  ),
);
ContentLayout.displayName = 'ContentLayout';

/* ─── List Page Layout ─── */
interface ListPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Toolbar area (filter, sort, view settings) */
  toolbar?: React.ReactNode;
  /** Footer area (pagination, counts) */
  footer?: React.ReactNode;
}

const ListPageLayout = React.forwardRef<HTMLDivElement, ListPageLayoutProps>(
  ({ className, toolbar, footer, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col flex-1 overflow-hidden', className)} {...props}>
      {toolbar && toolbar}
      <div className="flex-1 overflow-auto">{children}</div>
      {footer && (
        <div className="flex-shrink-0 border-t border-[var(--border-subtle)] px-4 py-2 text-[12px] text-[var(--text-muted)]">
          {footer}
        </div>
      )}
    </div>
  ),
);
ListPageLayout.displayName = 'ListPageLayout';

/* ─── Detail Page Layout ───
 * Reconstructed from CRM mobile behavior:
 *   - Two-column layout PERSISTS on mobile (does NOT collapse to single column)
 *   - Both columns visible, content truncates/clips at edges
 *   - Horizontal scroll available for the detail panel
 *   - Desktop: fixed side panel width
 *   - Mobile: flexible two-column with min-widths, scrollable container
 */
interface DetailPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Right sidebar/panel */
  sidePanel?: React.ReactNode;
  /** Panel width (desktop) */
  sidePanelWidth?: string;
}

const DetailPageLayout = React.forwardRef<HTMLDivElement, DetailPageLayoutProps>(
  (
    {
      className,
      sidePanel,
      sidePanelWidth = 'var(--detail-panel-width)',
      children,
      ...props
    },
    ref,
  ) => (
    <div ref={ref} className={cn('flex flex-1 overflow-hidden', className)} {...props}>
      {/* Main content — scrollable vertically */}
      <div className="flex-1 min-w-0 overflow-y-auto">{children}</div>

      {/* Side panel — always visible, scrollable independently */}
      {sidePanel && (
        <aside
          className={cn(
            'flex-shrink-0 overflow-y-auto border-l border-[var(--border-subtle)]',
            'w-[200px] lg:w-[var(--detail-panel-width)]',
          )}
        >
          {sidePanel}
        </aside>
      )}
    </div>
  ),
);
DetailPageLayout.displayName = 'DetailPageLayout';

/* ─── Settings Layout ─── */
interface SettingsLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  nav: React.ReactNode;
}

const SettingsLayout = React.forwardRef<HTMLDivElement, SettingsLayoutProps>(
  ({ className, nav, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col lg:flex-row flex-1 overflow-hidden', className)} {...props}>
      {/* Desktop: vertical sidebar nav */}
      <nav className="hidden lg:block w-[240px] flex-shrink-0 border-r border-[var(--border-subtle)] overflow-y-auto p-3">
        {nav}
      </nav>
      {/* Mobile: horizontal scrollable nav */}
      <nav className="lg:hidden flex-shrink-0 border-b border-[var(--border-subtle)] overflow-x-auto">
        <div className="flex items-center gap-1 px-3 py-2 min-w-max">
          {nav}
        </div>
      </nav>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  ),
);
SettingsLayout.displayName = 'SettingsLayout';

export { ContentLayout, ListPageLayout, DetailPageLayout, SettingsLayout };
export type { ContentLayoutProps, ListPageLayoutProps, DetailPageLayoutProps, SettingsLayoutProps };

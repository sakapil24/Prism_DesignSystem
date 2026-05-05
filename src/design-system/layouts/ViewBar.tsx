/**
 * CRM Design System Example — View Bar
 *
 * The bar above list pages showing the active view name,
 * a view toggle (list/board), and view-level actions.
 * Height: 40px, border-bottom.
 *
 * Observed on: Companies list, Deals pipeline, People list
 * Screenshot ref: companies-list-page.png (view bar zone)
 *
 * Mobile behavior (from CRM production):
 *   - Chips scroll horizontally (overflow-x-auto)
 *   - Same height, tighter padding
 *   - CTA button (+ New) stays visible at right edge
 */

import * as React from 'react';
import { cn } from '../utils/cn';

interface ViewBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left content: view name dropdown, view toggle */
  left?: React.ReactNode;
  /** Right content: import/export, new record button */
  right?: React.ReactNode;
}

const ViewBar = React.forwardRef<HTMLDivElement, ViewBarProps>(
  ({ className, left, right, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-between h-10 px-3 lg:px-4 flex-shrink-0',
        'border-b border-[var(--border-subtle)]',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 min-w-0 overflow-x-auto">{left ?? children}</div>
      {right && <div className="flex items-center gap-2 flex-shrink-0 ml-2">{right}</div>}
    </div>
  ),
);
ViewBar.displayName = 'ViewBar';

export { ViewBar };
export type { ViewBarProps };

/**
 * CRM Design System Example — BottomNav
 *
 * Fixed-bottom tab bar for mobile navigation.
 * Hidden on desktop (lg: breakpoint and above).
 */

import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Types ─── */

interface BottomNavItem {
  /** Unique identifier */
  id: string;
  /** Icon element (typically 20×20 SVG) */
  icon: React.ReactNode;
  /** Tab label */
  label: string;
  /** Whether this tab is active */
  active?: boolean;
  /** Badge count (shown as red circle) */
  badge?: number;
  /** Click handler */
  onClick?: () => void;
}

interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation items (max 5 recommended) */
  items: BottomNavItem[];
}

/* ─── Component ─── */

const BottomNav = React.forwardRef<HTMLElement, BottomNavProps>(
  ({ className, items, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        'fixed bottom-0 inset-x-0 z-[var(--z-sticky)] lg:hidden',
        'flex items-center justify-around',
        'h-14 safe-area-pb',
        'bg-[var(--surface-page)] border-t border-[var(--border-subtle)]',
        className,
      )}
      aria-label="Bottom navigation"
      {...props}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={item.onClick}
          className={cn(
            'relative flex flex-col items-center justify-center gap-0.5',
            'flex-1 h-full px-1',
            'text-[11px] font-medium leading-none',
            'transition-colors duration-[var(--duration-fast)]',
            item.active
              ? 'text-[var(--accent-primary)]'
              : 'text-[var(--text-muted)] active:text-[var(--text-primary)]',
          )}
          aria-current={item.active ? 'page' : undefined}
        >
          <span className="relative inline-flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5">
            {item.icon}
            {/* Badge */}
            {item.badge !== undefined && item.badge > 0 && (
              <span
                className={cn(
                  'absolute -top-1 -right-1.5 min-w-[16px] h-4 px-1',
                  'flex items-center justify-center',
                  'rounded-full bg-[var(--accent-error)] text-white',
                  'text-[10px] font-semibold leading-none',
                )}
              >
                {item.badge > 99 ? '99+' : item.badge}
              </span>
            )}
          </span>
          <span className="truncate max-w-full">{item.label}</span>
        </button>
      ))}
    </nav>
  ),
);
BottomNav.displayName = 'BottomNav';

export { BottomNav };
export type { BottomNavProps, BottomNavItem };

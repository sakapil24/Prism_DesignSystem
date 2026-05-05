/**
 * CRM Design System Example — MobileNav
 *
 * Reconstructed from CRM production mobile behavior:
 *
 * - Left-side fixed sidebar panel (same width as desktop: 275px)
 * - NO dark backdrop overlay (CRM doesn't use one)
 * - Transition: transform 140ms (fast slide in/out)
 * - Toggled via explicit "Expand/Collapse sidebar" button
 * - z-index: 10 (below overlays/modals)
 * - Auto-hides on desktop (lg: breakpoint and above)
 *
 * Uses CSS transform for the slide animation instead of
 * mount/unmount, matching the sample CRM's production approach.
 */

import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Types ─── */

interface MobileNavProps {
  /** Whether the drawer is open */
  open: boolean;
  /** Callback to control open state */
  onOpenChange: (open: boolean) => void;
  /** Navigation content rendered inside the drawer */
  children: React.ReactNode;
  /** Additional class for the drawer panel */
  className?: string;
}

/* ─── Component ─── */

function MobileNav({ open, onOpenChange, children, className }: MobileNavProps) {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-10 lg:hidden',
        'w-[var(--sidebar-width)]',
        'flex flex-col bg-[var(--surface-sidebar)]',
        'border-r border-[var(--border-subtle)]',
        'shadow-[var(--shadow-popover)]',
        'transition-transform duration-[140ms] ease-[var(--ease-default)]',
        open ? 'translate-x-0' : '-translate-x-full',
        'focus:outline-none',
        className,
      )}
      role="navigation"
      aria-label="Mobile navigation"
      aria-hidden={!open}
    >
      {children}
    </aside>
  );
}

MobileNav.displayName = 'MobileNav';

export { MobileNav };
export type { MobileNavProps };

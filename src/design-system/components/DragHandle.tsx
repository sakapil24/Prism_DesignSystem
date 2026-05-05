/**
 * CRM Design System Example — DragHandle
 *
 * Grip icon for drag-and-drop affordance.
 */

import * as React from 'react';
import { cn } from '../utils/cn';

export interface DragHandleProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const DragHandle = React.forwardRef<HTMLButtonElement, DragHandleProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label="Drag to reorder"
      className={cn(
        'inline-flex h-6 w-4 cursor-grab items-center justify-center rounded-[var(--radius-sm)]',
        'text-[var(--icon-muted)] opacity-0 group-hover:opacity-100',
        'transition-opacity duration-[var(--duration-fast)]',
        'hover:text-[var(--icon-default)] hover:bg-[var(--surface-hover)]',
        'active:cursor-grabbing',
        'focus-visible:outline-none focus-visible:opacity-100 focus-visible:shadow-[var(--shadow-focus-ring)]',
        className
      )}
      {...props}
    >
      <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor">
        <circle cx="3" cy="3" r="1.25" />
        <circle cx="7" cy="3" r="1.25" />
        <circle cx="3" cy="7" r="1.25" />
        <circle cx="7" cy="7" r="1.25" />
        <circle cx="3" cy="11" r="1.25" />
        <circle cx="7" cy="11" r="1.25" />
      </svg>
    </button>
  )
);

DragHandle.displayName = 'DragHandle';

export { DragHandle };

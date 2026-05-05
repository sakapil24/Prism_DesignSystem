/**
 * CRM Design System Example — Bulk Action Bar
 *
 * Appears when DataTable rows are selected. Shows "{N} selected"
 * with clear button, then bulk action buttons.
 * Returns null when count is 0.
 *
 * Observed on: Companies list with selected rows
 * Screenshot ref: table-row-selected-bulk-action-bar.png
 *
 * Layout: fixed to bottom of table area, centered, elevated.
 * Content: [N selected badge] [action buttons...] [close X]
 */

import * as React from 'react';
import { cn } from '../utils/cn';

interface BulkAction {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'destructive';
}

interface BulkActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of selected items */
  count: number;
  /** Available bulk actions */
  actions: BulkAction[];
  /** Clear selection handler */
  onClear: () => void;
}

function BulkActionBar({ className, count, actions, onClear, ...props }: BulkActionBarProps) {
  if (count === 0) return null;

  return (
    <div
      className={cn(
        'flex items-center gap-2 px-3 h-11',
        'bg-white',
        'shadow-[var(--shadow-xl)]',
        'border border-[var(--border-subtle)]',
        'animate-slideUp',
        // Mobile: full-width bottom bar; Desktop: centered floating bar
        'fixed bottom-0 inset-x-0 rounded-none',
        'lg:bottom-4 lg:inset-x-auto lg:left-1/2 lg:-translate-x-1/2 lg:rounded-[var(--radius-lg)]',
        'safe-area-pb lg:pb-0',
        className,
      )}
      role="toolbar"
      aria-label={`${count} item${count > 1 ? 's' : ''} selected`}
      {...props}
    >
      {/* Selected count badge */}
      <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--text-primary)] whitespace-nowrap">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--accent-primary)] text-white text-[11px] font-semibold">
          {count}
        </span>
        selected
      </span>

      {/* Divider */}
      <div className="w-px h-5 bg-[var(--border-default)]" />

      {/* Action buttons */}
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={action.onClick}
          className={cn(
            'inline-flex items-center gap-1.5 px-2.5 h-7 rounded-[var(--radius-md)]',
            'text-[14px] font-medium whitespace-nowrap',
            'transition-colors duration-[var(--duration-fast)]',
            action.variant === 'destructive'
              ? 'text-[var(--text-error)] hover:bg-[var(--color-red-50)]'
              : 'text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]',
          )}
        >
          {action.icon && (
            <span className="inline-flex shrink-0 [&>svg]:w-4 [&>svg]:h-4">{action.icon}</span>
          )}
          {action.label}
        </button>
      ))}

      {/* Close / clear selection */}
      <button
        type="button"
        onClick={onClear}
        className={cn(
          'ml-auto inline-flex items-center justify-center w-7 h-7 rounded-[var(--radius-md)]',
          'text-[var(--icon-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--icon-default)]',
          'transition-colors duration-[var(--duration-fast)]',
        )}
        aria-label="Clear selection"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <path d="M3.646 3.646a.5.5 0 01.708 0L7 6.293l2.646-2.647a.5.5 0 01.708.708L7.707 7l2.647 2.646a.5.5 0 01-.708.708L7 7.707l-2.646 2.647a.5.5 0 01-.708-.708L6.293 7 3.646 4.354a.5.5 0 010-.708z" />
        </svg>
      </button>
    </div>
  );
}

export { BulkActionBar };
export type { BulkActionBarProps, BulkAction };

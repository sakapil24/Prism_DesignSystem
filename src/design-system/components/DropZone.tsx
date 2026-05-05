/**
 * CRM Design System Example — DropZone
 *
 * Drag-and-drop file target with click-to-browse fallback.
 * Visual states: idle, dragOver, error.
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/* ─── Variants ───────────────────────────────────────────────────────── */

const dropZoneVariants = cva(
  [
    'relative flex flex-col items-center justify-center gap-2 rounded-[var(--radius-xl)]',
    'border-2 border-dashed transition-colors duration-[var(--duration-moderate)] ease-[var(--ease-default)]',
    'cursor-pointer',
    'focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]',
  ],
  {
    variants: {
      size: {
        compact: 'h-24 px-4',
        expanded: 'h-48 px-6',
      },
      state: {
        idle: 'border-[var(--border-default)] bg-[var(--surface-page)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)]',
        dragOver: 'border-[var(--border-accent)] bg-[var(--accent-primary-subtle)]',
        error: 'border-[var(--border-error)] bg-[var(--color-red-50)]',
      },
    },
    defaultVariants: {
      size: 'expanded',
      state: 'idle',
    },
  }
);

/* ─── Types ──────────────────────────────────────────────────────────── */

export interface DropZoneProps extends VariantProps<typeof dropZoneVariants> {
  onDrop?: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  disabled?: boolean;
  hasError?: boolean;
  className?: string;
}

/* ─── Component ──────────────────────────────────────────────────────── */

function DropZone({
  onDrop,
  accept,
  multiple = true,
  icon,
  title = 'Drag files here or click to browse',
  description,
  disabled,
  hasError,
  size,
  className,
}: DropZoneProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = hasError ? 'error' : isDragOver ? 'dragOver' : 'idle';

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (!disabled && e.dataTransfer.files.length > 0) {
      onDrop?.(e.dataTransfer.files);
    }
  };

  const handleClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onDrop?.(e.target.files);
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        dropZoneVariants({ size, state }),
        disabled && 'pointer-events-none opacity-50',
        className
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="sr-only"
        tabIndex={-1}
      />
      {icon ?? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--icon-muted)]">
          <path d="M12 16V8M12 8L8 12M12 8L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 16V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      <span className="text-[var(--text-sm)] font-[var(--font-medium)] text-[var(--text-secondary)]">
        {title}
      </span>
      {description && (
        <span className="text-[var(--text-xs)] text-[var(--text-muted)]">
          {description}
        </span>
      )}
    </div>
  );
}

DropZone.displayName = 'DropZone';

export { DropZone, dropZoneVariants };

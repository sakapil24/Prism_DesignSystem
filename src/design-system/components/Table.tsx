import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Table ─── */
const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-[14px]', className)}
        {...props}
      />
    </div>
  ),
);
Table.displayName = 'Table';

/* ─── Table Header ─── */
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'border-b border-[var(--border-default)]',
      'bg-[var(--surface-page)]',
      className,
    )}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

/* ─── Table Body ─── */
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
));
TableBody.displayName = 'TableBody';

/* ─── Table Row ─── */
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { selected?: boolean }
>(({ className, selected, ...props }, ref) => (
  <tr
    ref={ref}
    data-state={selected ? 'selected' : undefined}
    className={cn(
      'h-9 border-b border-[var(--border-subtle)]',
      'transition-colors duration-[100ms]',
      'hover:bg-[var(--surface-hover)]',
      'data-[state=selected]:bg-[var(--surface-selected)]',
      className,
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

/* ─── Table Head Cell ─── */
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { sortable?: boolean; sorted?: 'asc' | 'desc' | false }
>(({ className, children, sortable, sorted, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-9 px-3 text-left align-middle',
      'text-[12px] font-medium text-[var(--text-muted)]',
      'select-none',
      sortable && 'cursor-pointer hover:text-[var(--text-secondary)]',
      className,
    )}
    {...props}
  >
    <div className="flex items-center gap-1">
      {children}
      {sorted === 'asc' && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 3L10 8H2L6 3Z" />
        </svg>
      )}
      {sorted === 'desc' && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 9L2 4H10L6 9Z" />
        </svg>
      )}
    </div>
  </th>
));
TableHead.displayName = 'TableHead';

/* ─── Table Cell ─── */
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'px-3 py-1.5 align-middle',
      'text-[14px] font-medium text-[var(--text-primary)]',
      className,
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

/* ─── Table Footer ─── */
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t border-[var(--border-default)]',
      'text-[12px] text-[var(--text-muted)]',
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

/* ─── Table Caption ─── */
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-2 text-[12px] text-[var(--text-muted)]', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
  TableCaption,
};

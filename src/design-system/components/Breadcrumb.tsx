/**
 * CRM Design System Example — Breadcrumb Component
 *
 * Navigation breadcrumb matching the sample CRM's entity navigation pattern.
 * Pure HTML/CSS, no external dependencies.
 */

import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Breadcrumb Root ─────────────────────────────────────────────────── */

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn('flex items-center', className)}
      {...props}
    />
  )
);
Breadcrumb.displayName = 'Breadcrumb';

/* ─── BreadcrumbList ──────────────────────────────────────────────────── */

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.OlHTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'flex items-center gap-1 text-[var(--text-sm)] font-[var(--font-medium)]',
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

/* ─── BreadcrumbItem ──────────────────────────────────────────────────── */

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1', className)}
    {...props}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

/* ─── BreadcrumbLink ──────────────────────────────────────────────────── */

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'text-[var(--text-muted)]',
        'transition-colors duration-[var(--duration-fast)]',
        'hover:text-[var(--text-primary)]',
        className
      )}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

/* ─── BreadcrumbPage (current) ────────────────────────────────────────── */

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(
      'text-[var(--text-primary)] font-[var(--font-medium)]',
      className
    )}
    {...props}
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

/* ─── BreadcrumbSeparator ─────────────────────────────────────────────── */

function BreadcrumbSeparator({
  className,
  children,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn('text-[var(--text-ghost)]', className)}
      {...props}
    >
      {children ?? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </li>
  );
}
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

/* ─── BreadcrumbEllipsis ──────────────────────────────────────────────── */

function BreadcrumbEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(
        'flex h-6 w-6 items-center justify-center rounded-[var(--radius-sm)]',
        'text-[var(--text-muted)]',
        'hover:bg-[var(--surface-hover)]',
        'transition-colors duration-[var(--duration-fast)]',
        'cursor-pointer',
        className
      )}
      {...props}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        <circle cx="3" cy="7" r="1.25" />
        <circle cx="7" cy="7" r="1.25" />
        <circle cx="11" cy="7" r="1.25" />
      </svg>
    </span>
  );
}
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

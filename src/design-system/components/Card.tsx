import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Card ─── */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-[var(--radius-xl)] bg-[var(--surface-page)]',
        'shadow-[var(--shadow-border)]',
        'transition-shadow duration-[200ms]',
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

/* ─── Card Header ─── */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between px-4 pt-4 pb-3', className)}
      {...props}
    />
  ),
);
CardHeader.displayName = 'CardHeader';

/* ─── Card Title ─── */
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-[14px] font-semibold leading-[1.35] text-[var(--text-primary)]',
        className,
      )}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

/* ─── Card Description ─── */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-[12px] text-[var(--text-muted)]', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

/* ─── Card Content ─── */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-4 pb-4', className)} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

/* ─── Card Footer ─── */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-end gap-2 px-4 py-3',
        'border-t border-[var(--border-subtle)]',
        className,
      )}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };

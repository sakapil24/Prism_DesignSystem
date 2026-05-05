/**
 * CRM Design System Example — Alert / AlertDialog Components
 *
 * Two patterns:
 * 1. Alert — inline banner for status messages (info, success, warning, error)
 * 2. AlertDialog — confirmation modal built on Radix AlertDialog
 */

import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/* ═══════════════════════════════════════════════════════════════════════
 * Alert Banner
 * ═══════════════════════════════════════════════════════════════════════ */

const alertVariants = cva(
  [
    'relative w-full rounded-[var(--radius)] p-3',
    'flex items-start gap-3',
    'text-[var(--text-base)] font-[var(--font-medium)] leading-[var(--leading-snug)]',
    'border',
    'animate-slideInUp',
  ],
  {
    variants: {
      variant: {
        info: 'bg-[var(--color-blue-50)] border-[var(--color-blue-200)] text-[var(--color-blue-800)]',
        success: 'bg-[var(--color-green-50)] border-[var(--color-green-500)]/20 text-[var(--color-green-800)]',
        warning: 'bg-[var(--color-amber-50)] border-[var(--color-amber-500)]/20 text-[var(--color-amber-800)]',
        error: 'bg-[var(--color-red-50)] border-[var(--color-red-500)]/20 text-[var(--color-red-700)]',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon && (
        <span className="flex-shrink-0 mt-0.5 [&>svg]:h-4 [&>svg]:w-4">
          {icon}
        </span>
      )}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
);
Alert.displayName = 'Alert';

function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn('font-semibold leading-[var(--leading-tight)]', className)}
      {...props}
    />
  );
}
AlertTitle.displayName = 'AlertTitle';

function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mt-1 text-[var(--text-sm)] opacity-90 leading-[var(--leading-normal)]', className)}
      {...props}
    />
  );
}
AlertDescription.displayName = 'AlertDescription';

/* ═══════════════════════════════════════════════════════════════════════
 * AlertDialog (Confirmation Modal)
 * ═══════════════════════════════════════════════════════════════════════ */

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)]',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
      'duration-160',
      className
    )}
    {...props}
  />
));
AlertDialogOverlay.displayName = 'AlertDialogOverlay';

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
        'w-full max-w-[400px] rounded-[12px] bg-white p-6',
        'shadow-[var(--shadow-modal)]',
        'outline-none',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
        'duration-200',
        className
      )}
      {...props}
    />
  </AlertDialogPrimitive.Portal>
));
AlertDialogContent.displayName = 'AlertDialogContent';

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-base font-semibold text-[#191816]', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = 'AlertDialogTitle';

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('mt-2 text-sm text-[#6A707A] leading-[var(--leading-normal)]', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = 'AlertDialogDescription';

function AlertDialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-6 flex items-center justify-end gap-2', className)}
      {...props}
    />
  );
}
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      'inline-flex h-[28px] items-center justify-center rounded-[var(--radius)] px-[8px]',
      'text-[var(--text-base)] font-[var(--font-medium)]',
      'bg-white text-[var(--text-primary)]',
      'shadow-[inset_0_0_0_1px_var(--border-default)]',
      'hover:bg-[var(--surface-hover)]',
      'transition-colors duration-[var(--duration-moderate)]',
      'focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]',
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = 'AlertDialogCancel';

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & {
    destructive?: boolean;
  }
>(({ className, destructive, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex h-[28px] items-center justify-center rounded-[var(--radius)] px-[8px]',
      'text-[var(--text-base)] font-[var(--font-medium)]',
      'transition-colors duration-[var(--duration-moderate)]',
      'focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]',
      destructive
        ? 'bg-[var(--color-red-600)] text-white hover:bg-[var(--color-red-700)]'
        : 'bg-[var(--accent-primary)] text-white shadow-[var(--shadow-primary-btn)] hover:bg-[var(--accent-primary-hover)]',
      className
    )}
    {...props}
  />
));
AlertDialogAction.displayName = 'AlertDialogAction';

export {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription as AlertDialogDesc,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
};

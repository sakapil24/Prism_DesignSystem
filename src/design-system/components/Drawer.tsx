/**
 * CRM Design System Example — Drawer Component
 *
 * Slide-out panel built on Radix Dialog, matching the sample CRM's detail panel pattern.
 * Slides from right by default (configurable: left, right, top, bottom).
 */

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const Drawer = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerClose = DialogPrimitive.Close;
const DrawerPortal = DialogPrimitive.Portal;

/* ─── Overlay ─────────────────────────────────────────────────────────── */

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)]',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
      'duration-[var(--duration-slow)]',
      className
    )}
    {...props}
  />
));
DrawerOverlay.displayName = 'DrawerOverlay';

/* ─── Content ─────────────────────────────────────────────────────────── */

const drawerContentVariants = cva(
  [
    'fixed z-50 bg-white outline-none',
    'shadow-[var(--shadow-xl)]',
    'data-[state=open]:animate-in',
    'data-[state=closed]:animate-out',
    'duration-[var(--duration-slow)] ease-[var(--ease-default)]',
  ],
  {
    variants: {
      side: {
        right: [
          'inset-y-0 right-0 w-full max-w-[var(--detail-panel-width)]',
          'data-[state=open]:slide-in-from-right',
          'data-[state=closed]:slide-out-to-right',
        ].join(' '),
        left: [
          'inset-y-0 left-0 w-full max-w-[var(--detail-panel-width)]',
          'data-[state=open]:slide-in-from-left',
          'data-[state=closed]:slide-out-to-left',
        ].join(' '),
        top: [
          'inset-x-0 top-0 max-h-[80vh]',
          'data-[state=open]:slide-in-from-top',
          'data-[state=closed]:slide-out-to-top',
        ].join(' '),
        bottom: [
          'inset-x-0 bottom-0 max-h-[80vh]',
          'data-[state=open]:slide-in-from-bottom',
          'data-[state=closed]:slide-out-to-bottom',
        ].join(' '),
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {
  showClose?: boolean;
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ className, side, showClose = true, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(drawerContentVariants({ side }), className)}
      {...props}
    >
      {children}
      {showClose && (
        <DialogPrimitive.Close
          className={cn(
            'absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-md text-[#6A707A] outline-none',
            'transition-colors duration-100',
            'hover:bg-[#EFF1F4] hover:text-[#191816]',
            'focus-visible:ring-2 focus-visible:ring-[#D21905] focus-visible:ring-offset-1'
          )}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

/* ─── Header ──────────────────────────────────────────────────────────── */

function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col gap-1 px-6 pt-6 pb-4', className)}
      {...props}
    />
  );
}
DrawerHeader.displayName = 'DrawerHeader';

/* ─── Title ───────────────────────────────────────────────────────────── */

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-base font-semibold text-[#191816]', className)}
    {...props}
  />
));
DrawerTitle.displayName = 'DrawerTitle';

/* ─── Description ─────────────────────────────────────────────────────── */

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-[#6A707A]', className)}
    {...props}
  />
));
DrawerDescription.displayName = 'DrawerDescription';

/* ─── Body ────────────────────────────────────────────────────────────── */

function DrawerBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex-1 overflow-y-auto px-6 py-4', className)}
      {...props}
    />
  );
}
DrawerBody.displayName = 'DrawerBody';

/* ─── Footer ──────────────────────────────────────────────────────────── */

function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 border-t border-[#EFF1F4] px-6 py-4',
        className
      )}
      {...props}
    />
  );
}
DrawerFooter.displayName = 'DrawerFooter';

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
};

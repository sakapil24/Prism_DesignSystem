import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const Modal = DialogPrimitive.Root;

const ModalTrigger = DialogPrimitive.Trigger;

const ModalPortal = DialogPrimitive.Portal;

/* -------------------------------------------------------------------------------------------------
 * Overlay
 * ---------------------------------------------------------------------------------------------- */

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
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
ModalOverlay.displayName = 'ModalOverlay';

/* -------------------------------------------------------------------------------------------------
 * Close Button
 * ---------------------------------------------------------------------------------------------- */

const ModalCloseButton = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      'absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-md text-[#6A707A] outline-none',
      'transition-colors duration-100',
      'hover:bg-[#EFF1F4] hover:text-[#191816]',
      'focus-visible:ring-2 focus-visible:ring-[#D21905] focus-visible:ring-offset-1',
      className
    )}
    {...props}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L4 12M4 4L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
));
ModalCloseButton.displayName = 'ModalCloseButton';

/* -------------------------------------------------------------------------------------------------
 * Content
 * ---------------------------------------------------------------------------------------------- */

const modalContentVariants = cva(
  [
    'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
    'w-full rounded-[12px] bg-white',
    'shadow-[rgba(0,0,0,0.1)_0px_20px_50px_0px,rgba(0,0,0,0.06)_0px_4px_16px_0px]',
    'outline-none',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
    'duration-200',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-[400px]',
        md: 'max-w-[520px]',
        lg: 'max-w-[640px]',
        xl: 'max-w-[780px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

interface ModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalContentVariants> {
  showClose?: boolean;
}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ className, size, showClose = true, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(modalContentVariants({ size }), className)}
      {...props}
    >
      {children}
      {showClose && <ModalCloseButton />}
    </DialogPrimitive.Content>
  </ModalPortal>
));
ModalContent.displayName = 'ModalContent';

/* -------------------------------------------------------------------------------------------------
 * Header
 * ---------------------------------------------------------------------------------------------- */

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function ModalHeader({ className, ...props }: ModalHeaderProps) {
  return (
    <div
      className={cn('px-6 pb-0 pt-6', className)}
      {...props}
    />
  );
}
ModalHeader.displayName = 'ModalHeader';

/* -------------------------------------------------------------------------------------------------
 * Title
 * ---------------------------------------------------------------------------------------------- */

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-base font-semibold text-[#191816]', className)}
    {...props}
  />
));
ModalTitle.displayName = 'ModalTitle';

/* -------------------------------------------------------------------------------------------------
 * Description
 * ---------------------------------------------------------------------------------------------- */

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('mt-1 text-sm text-[#6A707A]', className)}
    {...props}
  />
));
ModalDescription.displayName = 'ModalDescription';

/* -------------------------------------------------------------------------------------------------
 * Body
 * ---------------------------------------------------------------------------------------------- */

function ModalBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-6 py-6', className)}
      {...props}
    />
  );
}
ModalBody.displayName = 'ModalBody';

/* -------------------------------------------------------------------------------------------------
 * Footer
 * ---------------------------------------------------------------------------------------------- */

function ModalFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
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
ModalFooter.displayName = 'ModalFooter';

export {
  Modal,
  ModalTrigger,
  ModalPortal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
};

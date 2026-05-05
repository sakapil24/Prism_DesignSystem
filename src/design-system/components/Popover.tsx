import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../utils/cn';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverPortal = PopoverPrimitive.Portal;

/* -------------------------------------------------------------------------------------------------
 * Close Button
 * ---------------------------------------------------------------------------------------------- */

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Close
    ref={ref}
    className={cn(
      'absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-md text-[#6A707A] outline-none',
      'transition-colors duration-100',
      'hover:bg-[#EFF1F4] hover:text-[#191816]',
      'focus-visible:ring-2 focus-visible:ring-[#D21905] focus-visible:ring-offset-1',
      className
    )}
    {...props}
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="sr-only">Close</span>
  </PopoverPrimitive.Close>
));
PopoverClose.displayName = 'PopoverClose';

/* -------------------------------------------------------------------------------------------------
 * Arrow
 * ---------------------------------------------------------------------------------------------- */

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cn('fill-white', className)}
    width={12}
    height={6}
    {...props}
  />
));
PopoverArrow.displayName = 'PopoverArrow';

/* -------------------------------------------------------------------------------------------------
 * Content
 * ---------------------------------------------------------------------------------------------- */

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    showArrow?: boolean;
    showClose?: boolean;
  }
>(
  (
    {
      className,
      align = 'center',
      sideOffset = 6,
      showArrow = false,
      showClose = false,
      children,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-auto rounded-[12px] bg-white p-4 outline-none',
          'shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px,rgba(0,0,0,0.06)_0px_2px_8px_0px,rgba(0,0,0,0.04)_0px_0px_0px_1px]',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=top]:slide-in-from-bottom-2',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'duration-200',
          className
        )}
        {...props}
      >
        {showClose && <PopoverClose />}
        {children}
        {showArrow && <PopoverArrow />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = 'PopoverContent';

/* -------------------------------------------------------------------------------------------------
 * Header / Footer helpers
 * ---------------------------------------------------------------------------------------------- */

function PopoverHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mb-3 space-y-1', className)}
      {...props}
    />
  );
}
PopoverHeader.displayName = 'PopoverHeader';

function PopoverTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-sm font-semibold text-[#191816]', className)}
      {...props}
    />
  );
}
PopoverTitle.displayName = 'PopoverTitle';

function PopoverDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-sm text-[#6A707A]', className)}
      {...props}
    />
  );
}
PopoverDescription.displayName = 'PopoverDescription';

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
  PopoverAnchor,
  PopoverPortal,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
};

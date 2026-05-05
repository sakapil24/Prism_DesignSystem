import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../utils/cn';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipPortal = TooltipPrimitive.Portal;

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn('fill-[#191816]', className)}
    width={8}
    height={4}
    {...props}
  />
));
TooltipArrow.displayName = 'TooltipArrow';

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    showArrow?: boolean;
  }
>(({ className, sideOffset = 6, showArrow = true, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 rounded-lg bg-[#191816] px-2 py-1 text-[11px] leading-[16px] text-white',
        'select-none',
        'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=top]:slide-in-from-bottom-1',
        'data-[side=bottom]:slide-in-from-top-1',
        'data-[side=left]:slide-in-from-right-1',
        'data-[side=right]:slide-in-from-left-1',
        'duration-160',
        className
      )}
      {...props}
    >
      {children}
      {showArrow && <TooltipArrow />}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = 'TooltipContent';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
  showArrow?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function Tooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  delayDuration = 300,
  showArrow = true,
  open,
  defaultOpen,
  onOpenChange,
  className,
}: TooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipRoot open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          showArrow={showArrow}
          className={className}
        >
          {content}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}

export {
  Tooltip,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  TooltipPortal,
};

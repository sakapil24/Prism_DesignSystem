/**
 * CRM Design System Example — HoverCard Component
 *
 * Hover preview card built on Radix HoverCard.
 * Used for entity previews on hover (e.g., hovering a company name shows a mini card).
 */

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from '../utils/cn';

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

/* ─── Content ─────────────────────────────────────────────────────────── */

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 6, ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-[12px] bg-white p-4 outline-none',
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
    />
  </HoverCardPrimitive.Portal>
));
HoverCardContent.displayName = 'HoverCardContent';

/* ─── Arrow ───────────────────────────────────────────────────────────── */

const HoverCardArrow = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Arrow
    ref={ref}
    className={cn('fill-white', className)}
    width={10}
    height={5}
    {...props}
  />
));
HoverCardArrow.displayName = 'HoverCardArrow';

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardArrow,
};

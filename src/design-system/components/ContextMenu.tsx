/**
 * CRM Design System Example — ContextMenu Component
 *
 * Right-click context menu built on Radix UI.
 * Shares the same item styling as DropdownMenu for consistency.
 */

import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { cn } from '../utils/cn';

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

/* ─── Content ─────────────────────────────────────────────────────────── */

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        'z-50 min-w-[180px] overflow-hidden rounded-[12px] bg-white p-1',
        'shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px,rgba(0,0,0,0.06)_0px_2px_8px_0px,rgba(0,0,0,0.04)_0px_0px_0px_1px]',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'duration-200',
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = 'ContextMenuContent';

/* ─── Item ────────────────────────────────────────────────────────────── */

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    destructive?: boolean;
  }
>(({ className, inset, destructive, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex h-8 cursor-default select-none items-center rounded-[6px] px-2 text-sm font-medium outline-none',
      'transition-colors duration-100',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      destructive
        ? 'text-red-600 focus:bg-red-50 focus:text-red-600'
        : 'text-[#191816] focus:bg-[#EFF1F4]',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
ContextMenuItem.displayName = 'ContextMenuItem';

/* ─── CheckboxItem ────────────────────────────────────────────────────── */

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex h-8 cursor-default select-none items-center rounded-[6px] pl-8 pr-2 text-sm font-medium text-[#191816] outline-none',
      'transition-colors duration-100',
      'focus:bg-[#EFF1F4]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11.6667 3.5L5.25 9.91667L2.33334 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

/* ─── RadioItem ───────────────────────────────────────────────────────── */

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex h-8 cursor-default select-none items-center rounded-[6px] pl-8 pr-2 text-sm font-medium text-[#191816] outline-none',
      'transition-colors duration-100',
      'focus:bg-[#EFF1F4]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="3.5" fill="currentColor" />
        </svg>
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

/* ─── SubTrigger ──────────────────────────────────────────────────────── */

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'relative flex h-8 cursor-default select-none items-center rounded-[6px] px-2 text-sm font-medium text-[#191816] outline-none',
      'transition-colors duration-100',
      'focus:bg-[#EFF1F4]',
      'data-[state=open]:bg-[#EFF1F4]',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <svg className="ml-auto h-4 w-4 text-[#6A707A]" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

/* ─── SubContent ──────────────────────────────────────────────────────── */

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[180px] overflow-hidden rounded-[12px] bg-white p-1',
      'shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px,rgba(0,0,0,0.06)_0px_2px_8px_0px,rgba(0,0,0,0.04)_0px_0px_0px_1px]',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'duration-200',
      className
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

/* ─── Separator ───────────────────────────────────────────────────────── */

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-[#EFF1F4]', className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

/* ─── Label ───────────────────────────────────────────────────────────── */

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-xs font-medium text-[#6A707A]',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = 'ContextMenuLabel';

/* ─── Shortcut ────────────────────────────────────────────────────────── */

function ContextMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('ml-auto pl-4 text-xs tracking-widest text-[#6A707A]', className)} {...props} />
  );
}
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};

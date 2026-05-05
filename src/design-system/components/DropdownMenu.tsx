import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/* -------------------------------------------------------------------------------------------------
 * Content
 * ---------------------------------------------------------------------------------------------- */

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[180px] overflow-hidden rounded-[12px] bg-white p-1',
        'shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px,rgba(0,0,0,0.06)_0px_2px_8px_0px,rgba(0,0,0,0.04)_0px_0px_0px_1px]',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=open]:slide-in-from-top-1',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=top]:slide-in-from-bottom-1',
        'data-[side=bottom]:slide-in-from-top-1',
        'data-[side=left]:slide-in-from-right-1',
        'data-[side=right]:slide-in-from-left-1',
        'duration-200',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = 'DropdownMenuContent';

/* -------------------------------------------------------------------------------------------------
 * SubContent
 * ---------------------------------------------------------------------------------------------- */

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[180px] overflow-hidden rounded-[12px] bg-white p-1',
      'shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px,rgba(0,0,0,0.06)_0px_2px_8px_0px,rgba(0,0,0,0.04)_0px_0px_0px_1px]',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[side=top]:slide-in-from-bottom-1',
      'data-[side=bottom]:slide-in-from-top-1',
      'data-[side=left]:slide-in-from-right-1',
      'data-[side=right]:slide-in-from-left-1',
      'duration-200',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

/* -------------------------------------------------------------------------------------------------
 * Item
 * ---------------------------------------------------------------------------------------------- */

const dropdownMenuItemVariants = cva(
  [
    'relative flex h-8 cursor-default select-none items-center rounded-[6px] px-2 text-sm font-medium text-[#191816] outline-none',
    'transition-colors duration-100',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: 'focus:bg-[#EFF1F4]',
        destructive: 'text-red-600 focus:bg-red-50 focus:text-red-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> &
    VariantProps<typeof dropdownMenuItemVariants> & {
      inset?: boolean;
    }
>(({ className, variant, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      dropdownMenuItemVariants({ variant }),
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = 'DropdownMenuItem';

/* -------------------------------------------------------------------------------------------------
 * ItemIcon
 * ---------------------------------------------------------------------------------------------- */

interface DropdownMenuItemIconProps {
  children: React.ReactNode;
  className?: string;
}

function DropdownMenuItemIcon({ children, className }: DropdownMenuItemIconProps) {
  return (
    <span
      className={cn(
        'mr-2 flex h-4 w-4 shrink-0 items-center justify-center text-[#6A707A]',
        className
      )}
    >
      {children}
    </span>
  );
}
DropdownMenuItemIcon.displayName = 'DropdownMenuItemIcon';

/* -------------------------------------------------------------------------------------------------
 * CheckboxItem
 * ---------------------------------------------------------------------------------------------- */

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
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
      <DropdownMenuPrimitive.ItemIndicator>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6667 3.5L5.25 9.91667L2.33334 7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

/* -------------------------------------------------------------------------------------------------
 * RadioItem
 * ---------------------------------------------------------------------------------------------- */

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
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
      <DropdownMenuPrimitive.ItemIndicator>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="3.5" fill="currentColor" />
        </svg>
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

/* -------------------------------------------------------------------------------------------------
 * SubTrigger
 * ---------------------------------------------------------------------------------------------- */

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
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
    <svg
      className="ml-auto h-4 w-4 text-[#6A707A]"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

/* -------------------------------------------------------------------------------------------------
 * Label
 * ---------------------------------------------------------------------------------------------- */

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-xs font-medium text-[#6A707A]',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

/* -------------------------------------------------------------------------------------------------
 * Separator
 * ---------------------------------------------------------------------------------------------- */

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-[#EFF1F4]', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

/* -------------------------------------------------------------------------------------------------
 * Shortcut
 * ---------------------------------------------------------------------------------------------- */

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'ml-auto pl-4 text-xs tracking-widest text-[#6A707A]',
        className
      )}
      {...props}
    />
  );
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

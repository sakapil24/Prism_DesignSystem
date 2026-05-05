import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/* -------------------------------------------------------------------------------------------------
 * Provider
 * ---------------------------------------------------------------------------------------------- */

const ToastProvider = ToastPrimitive.Provider;

/* -------------------------------------------------------------------------------------------------
 * Viewport
 * ---------------------------------------------------------------------------------------------- */

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      'fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:right-4 sm:top-4 sm:flex-col sm:max-w-[380px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = 'ToastViewport';

/* -------------------------------------------------------------------------------------------------
 * Toast
 * ---------------------------------------------------------------------------------------------- */

const toastVariants = cva(
  [
    'group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-[12px] bg-white p-4',
    'shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px,rgba(0,0,0,0.06)_0px_2px_8px_0px,rgba(0,0,0,0.04)_0px_0px_0px_1px]',
    'transition-all',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-full',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-full',
    'data-[swipe=cancel]:translate-x-0',
    'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:animate-out data-[swipe=end]:fade-out-80',
    'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
    'duration-200',
  ],
  {
    variants: {
      variant: {
        default: 'border border-[#E1E4E9]',
        success: 'border-l-[3px] border-l-[#1F8056] border border-[#E1E4E9] border-l-[#1F8056]',
        error: 'border-l-[3px] border-l-[#D21905] border border-[#E1E4E9] border-l-[#D21905]',
        info: 'border-l-[3px] border-l-[#2D5DA0] border border-[#E1E4E9] border-l-[#2D5DA0]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
));
Toast.displayName = 'Toast';

/* -------------------------------------------------------------------------------------------------
 * Icon
 * ---------------------------------------------------------------------------------------------- */

const toastIconVariants = cva('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center', {
  variants: {
    variant: {
      default: 'text-[#6A707A]',
      success: 'text-[#1F8056]',
      error: 'text-[#D21905]',
      info: 'text-[#2D5DA0]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface ToastIconProps extends VariantProps<typeof toastIconVariants> {
  children?: React.ReactNode;
  className?: string;
}

function ToastIcon({ variant, children, className }: ToastIconProps) {
  const defaultIcons: Record<string, React.ReactNode> = {
    success: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4.5L6.75 12.75L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    error: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6V9.75M9 12.75H9.0075M3.345 15H14.655C15.7962 15 16.5075 13.7625 15.9375 12.75L10.2825 2.625C9.7125 1.6125 8.2875 1.6125 7.7175 2.625L2.0625 12.75C1.4925 13.7625 2.2038 15 3.345 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    info: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6H9.0075M9 8.25V12.75M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return (
    <span className={cn(toastIconVariants({ variant }), className)}>
      {children || (variant && variant !== 'default' ? defaultIcons[variant] : null)}
    </span>
  );
}
ToastIcon.displayName = 'ToastIcon';

/* -------------------------------------------------------------------------------------------------
 * Content wrapper
 * ---------------------------------------------------------------------------------------------- */

function ToastContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex-1 space-y-1', className)} {...props} />;
}
ToastContent.displayName = 'ToastContent';

/* -------------------------------------------------------------------------------------------------
 * Title
 * ---------------------------------------------------------------------------------------------- */

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn('text-sm font-medium text-[#191816]', className)}
    {...props}
  />
));
ToastTitle.displayName = 'ToastTitle';

/* -------------------------------------------------------------------------------------------------
 * Description
 * ---------------------------------------------------------------------------------------------- */

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn('text-sm text-[#6A707A]', className)}
    {...props}
  />
));
ToastDescription.displayName = 'ToastDescription';

/* -------------------------------------------------------------------------------------------------
 * Action
 * ---------------------------------------------------------------------------------------------- */

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex h-7 shrink-0 items-center justify-center rounded-md px-3 text-xs font-medium',
      'border border-[#E1E4E9] bg-white text-[#191816]',
      'transition-colors duration-100',
      'hover:bg-[#EFF1F4]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D21905] focus-visible:ring-offset-1',
      'disabled:pointer-events-none disabled:opacity-50',
      'group-[.error]:border-red-200 group-[.error]:text-red-600 group-[.error]:hover:bg-red-50',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = 'ToastAction';

/* -------------------------------------------------------------------------------------------------
 * Close
 * ---------------------------------------------------------------------------------------------- */

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-md text-[#6A707A] outline-none',
      'opacity-0 transition-opacity duration-100',
      'group-hover:opacity-100',
      'hover:text-[#191816]',
      'focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[#D21905]',
      className
    )}
    toast-close=""
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
  </ToastPrimitive.Close>
));
ToastClose.displayName = 'ToastClose';

/* -------------------------------------------------------------------------------------------------
 * useToast hook
 * ---------------------------------------------------------------------------------------------- */

type ToastVariant = 'default' | 'success' | 'error' | 'info';

interface ToastData {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
  action?: React.ReactNode;
  duration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const TOAST_LIMIT = 5;

type ToastAction =
  | { type: 'ADD'; toast: ToastData }
  | { type: 'UPDATE'; toast: Partial<ToastData> & { id: string } }
  | { type: 'DISMISS'; toastId: string }
  | { type: 'REMOVE'; toastId: string };

let toastCount = 0;

function generateId() {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER;
  return toastCount.toString();
}

const toastListeners: Array<(state: ToastData[]) => void> = [];
let memoryState: ToastData[] = [];

function dispatch(action: ToastAction) {
  switch (action.type) {
    case 'ADD':
      memoryState = [action.toast, ...memoryState].slice(0, TOAST_LIMIT);
      break;
    case 'UPDATE':
      memoryState = memoryState.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      );
      break;
    case 'DISMISS':
      memoryState = memoryState.map((t) =>
        t.id === action.toastId ? { ...t, open: false } : t
      );
      break;
    case 'REMOVE':
      memoryState = memoryState.filter((t) => t.id !== action.toastId);
      break;
  }
  toastListeners.forEach((listener) => listener(memoryState));
}

interface ToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
  action?: React.ReactNode;
  duration?: number;
}

function toast(opts: ToastOptions) {
  const id = generateId();
  dispatch({
    type: 'ADD',
    toast: {
      ...opts,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dispatch({ type: 'DISMISS', toastId: id });
      },
    },
  });
  return {
    id,
    dismiss: () => dispatch({ type: 'DISMISS', toastId: id }),
    update: (data: Partial<ToastOptions>) =>
      dispatch({ type: 'UPDATE', toast: { ...data, id } }),
  };
}

function useToast() {
  const [state, setState] = React.useState<ToastData[]>(memoryState);

  React.useEffect(() => {
    toastListeners.push(setState);
    return () => {
      const idx = toastListeners.indexOf(setState);
      if (idx > -1) toastListeners.splice(idx, 1);
    };
  }, []);

  return {
    toasts: state,
    toast,
    dismiss: (toastId: string) => dispatch({ type: 'DISMISS', toastId }),
    remove: (toastId: string) => dispatch({ type: 'REMOVE', toastId }),
  };
}

/* -------------------------------------------------------------------------------------------------
 * Toaster (drop-in host component)
 * ---------------------------------------------------------------------------------------------- */

function Toaster() {
  const { toasts, remove } = useToast();

  return (
    <ToastProvider duration={5000}>
      {toasts.map(({ id, title, description, variant, action, duration, ...rest }) => (
        <Toast
          key={id}
          variant={variant}
          duration={duration}
          onOpenChange={(open) => {
            if (!open) {
              // Wait for exit animation before removing
              setTimeout(() => remove(id), 200);
            }
          }}
          {...rest}
        >
          {variant && variant !== 'default' && <ToastIcon variant={variant} />}
          <ToastContent>
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </ToastContent>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
Toaster.displayName = 'Toaster';

export {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastContent,
  ToastAction,
  ToastClose,
  ToastIcon,
  Toaster,
  useToast,
  toast,
  type ToastData,
  type ToastVariant,
  type ToastOptions,
};

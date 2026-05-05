import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const spinnerVariants = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
        xl: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /** Accessible label for screen readers */
  label?: string;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, label = 'Loading', ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size }), 'text-[var(--text-muted)]', className)}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  ),
);
Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
export type { SpinnerProps };

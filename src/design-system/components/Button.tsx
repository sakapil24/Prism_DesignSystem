/**
 * CRM Design System Example — Button Component
 *
 * Deep-fidelity recreation of sample CRM's Button with full variant support.
 * Uses CVA for variant management and supports Radix Slot for composition.
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../utils/cn';

/* ─── Spinner sub-component ───────────────────────────────────────────── */

interface SpinnerProps {
  size?: number;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 14, className }) => (
  <svg
    className={cn('animate-spin', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

Spinner.displayName = 'Spinner';

/* ─── Button CVA variants ─────────────────────────────────────────────── */

const buttonVariants = cva(
  // Base styles — shared across all variants
  [
    'relative inline-flex items-center justify-center',
    'font-[family-name:var(--font-sans)]',
    'font-[number:var(--font-medium)]',
    'text-[length:var(--text-base)]',
    'leading-[var(--leading-none)]',
    'rounded-[var(--radius)]',
    'cursor-pointer select-none whitespace-nowrap',
    'transition-[background-color,color,box-shadow,opacity,transform]',
    'active:scale-[0.97]',
    'duration-[var(--duration-moderate)]',
    'ease-[var(--ease-default)]',
    // Focus-visible ring
    'focus-visible:outline-none',
    'focus-visible:shadow-[var(--shadow-focus-ring)]',
    // Disabled state
    'disabled:cursor-not-allowed disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--accent-primary)]',
          'text-[color:var(--text-inverse)]',
          'shadow-[var(--shadow-primary-btn)]',
          'hover:bg-[var(--accent-primary-hover)]',
          'active:bg-[#810100]',
          'disabled:hover:bg-[var(--accent-primary)]',
        ].join(' '),

        secondary: [
          'bg-white',
          'text-[color:var(--text-primary)]',
          'shadow-[inset_0_0_0_1px_var(--border-default)]',
          'hover:bg-[var(--surface-hover)]',
          'active:bg-[var(--surface-active)]',
          'disabled:hover:bg-white',
        ].join(' '),

        ghost: [
          'bg-transparent',
          'text-[color:var(--text-secondary)]',
          'hover:bg-[var(--surface-hover)]',
          'hover:text-[color:var(--text-primary)]',
          'active:bg-[var(--surface-active)]',
          'disabled:hover:bg-transparent',
          'disabled:hover:text-[color:var(--text-secondary)]',
        ].join(' '),

        destructive: [
          'bg-[var(--color-red-600)]',
          'text-[color:var(--text-inverse)]',
          'shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(220,38,38,0.12),0_3px_6px_-2px_rgba(220,38,38,0.08)]',
          'hover:bg-[var(--color-red-700)]',
          'active:bg-[#810100]',
          'disabled:hover:bg-[var(--color-red-600)]',
        ].join(' '),
      },

      size: {
        sm: [
          'h-[24px]',
          'px-[6px]',
          'gap-[4px]',
          'text-[length:var(--text-sm)]',
          'rounded-[var(--radius-md)]',
        ].join(' '),

        md: [
          'h-[28px]',
          'px-[8px]',
          'gap-[6px]',
          'text-[length:var(--text-base)]',
        ].join(' '),

        lg: [
          'h-[32px]',
          'px-[12px]',
          'gap-[6px]',
          'text-[length:var(--text-base)]',
        ].join(' '),
      },

      fullWidth: {
        true: 'w-full',
        false: '',
      },

      iconOnly: {
        true: '',
        false: '',
      },
    },

    compoundVariants: [
      // Icon-only buttons should be square
      { iconOnly: true, size: 'sm', className: 'w-[24px] px-0' },
      { iconOnly: true, size: 'md', className: 'w-[28px] px-0' },
      { iconOnly: true, size: 'lg', className: 'w-[32px] px-0' },
    ],

    defaultVariants: {
      variant: 'secondary',
      size: 'md',
      fullWidth: false,
      iconOnly: false,
    },
  }
);

/* ─── Button types ────────────────────────────────────────────────────── */

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonOwnProps extends ButtonVariantProps {
  /** Render as a Radix Slot for composition (e.g. wrapping <a>) */
  asChild?: boolean;
  /** Show a loading spinner and disable interaction */
  loading?: boolean;
  /** Icon element rendered before children */
  leftIcon?: React.ReactNode;
  /** Icon element rendered after children */
  rightIcon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

type ButtonProps = ButtonOwnProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonOwnProps>;

/* ─── Button component ────────────────────────────────────────────────── */

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      fullWidth,
      iconOnly,
      asChild = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : 'button'}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        className={cn(
          buttonVariants({ variant, size, fullWidth, iconOnly }),
          className
        )}
        {...props}
      >
        {/* Loading spinner — replaces left icon when loading */}
        {loading ? (
          <Spinner
            size={size === 'sm' ? 12 : 14}
            className="shrink-0"
          />
        ) : leftIcon ? (
          <span className="inline-flex shrink-0 items-center justify-center [&>svg]:h-[16px] [&>svg]:w-[16px]">
            {leftIcon}
          </span>
        ) : null}

        {/* Children — hidden visually when loading + iconOnly */}
        {children != null && (
          <span
            className={cn(
              'truncate',
              loading && iconOnly && 'sr-only'
            )}
          >
            {children}
          </span>
        )}

        {/* Right icon */}
        {rightIcon && !loading && (
          <span className="inline-flex shrink-0 items-center justify-center [&>svg]:h-[16px] [&>svg]:w-[16px]">
            {rightIcon}
          </span>
        )}
      </Component>
    );
  }
);

Button.displayName = 'Button';

/* ─── Exports ─────────────────────────────────────────────────────────── */

export { Button, buttonVariants, Spinner };
export type { ButtonProps, ButtonVariantProps };

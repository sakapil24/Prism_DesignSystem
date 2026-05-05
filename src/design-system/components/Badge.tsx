/**
 * CRM Design System Example — Badge Component
 *
 * Pixel-accurate recreation of sample CRM's colored badge system.
 * Supports 10 color variants, optional dot indicator, and removable state.
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/* ─── Badge CVA variants ──────────────────────────────────────────────── */

const badgeVariants = cva(
  // Base styles — shared across all color variants
  [
    'inline-flex items-center',
    'h-[22px]',
    'rounded-[7px]',
    'px-[6px] py-[1px]',
    'font-[family-name:var(--font-sans)]',
    'font-[number:var(--font-medium)]',
    'text-[length:14px]',
    'leading-[var(--leading-none)]',
    'whitespace-nowrap select-none',
    'transition-[background-color,color,opacity]',
    'duration-[var(--duration-moderate)]',
  ].join(' '),
  {
    variants: {
      color: {
        amber: 'bg-[#FFF3CC] text-[#874D00]',
        lime: 'bg-[#F4FBCB] text-[#4D7C0F]',
        orange: 'bg-[#FEEEE1] text-[#9A3412]',
        green: 'bg-[#E0FCED] text-[#065F46]',
        gray: 'bg-[#F8F9FB] text-[#505154]',
        blue: 'bg-[#E5EEFF] text-[#0D3688]',
        purple: 'bg-[#F3EEFF] text-[#6D28D9]',
        pink: 'bg-[#FEECF3] text-[#9D174D]',
        red: 'bg-[#FEF2F2] text-[#991B1B]',
        cyan: 'bg-[#E0F7FF] text-[#0E7490]',
      },
    },
    defaultVariants: {
      color: 'gray',
    },
  }
);

/* ─── Dot color mapping ───────────────────────────────────────────────── */

const dotColorMap: Record<string, string> = {
  amber: 'bg-[#D97706]',
  lime: 'bg-[#65A30D]',
  orange: 'bg-[#F97516]',
  green: 'bg-[#059669]',
  gray: 'bg-[#808184]',
  blue: 'bg-[#AB342B]',
  purple: 'bg-[#9B69FF]',
  pink: 'bg-[#FA4B94]',
  red: 'bg-[#DC2626]',
  cyan: 'bg-[#00B9EB]',
};

/* ─── Remove button SVG ───────────────────────────────────────────────── */

const RemoveIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.5 3.5L8.5 8.5M8.5 3.5L3.5 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Badge types ─────────────────────────────────────────────────────── */

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

interface BadgeOwnProps extends BadgeVariantProps {
  /** Show a colored dot indicator before the label */
  dot?: boolean;
  /** Animate the dot with a pulse effect */
  pulse?: boolean;
  /** Make the badge removable with an X button */
  removable?: boolean;
  /** Callback when the remove button is clicked */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
}

type BadgeProps = BadgeOwnProps &
  Omit<React.ComponentPropsWithoutRef<'span'>, keyof BadgeOwnProps>;

/* ─── Badge component ─────────────────────────────────────────────────── */

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      color = 'gray',
      dot = false,
      pulse = false,
      removable = false,
      onRemove,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const resolvedColor = color ?? 'gray';

    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({ color }),
          (dot || pulse || removable) && 'gap-[4px]',
          removable && 'pr-[2px]',
          className
        )}
        {...props}
      >
        {/* Dot indicator */}
        {(dot || pulse) && (
          <span
            className={cn(
              'inline-block h-[6px] w-[6px] shrink-0 rounded-full',
              dotColorMap[resolvedColor],
              pulse && 'animate-pulse-dot',
            )}
            aria-hidden="true"
          />
        )}

        {/* Label */}
        <span className="truncate">{children}</span>

        {/* Remove button */}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className={cn(
              'inline-flex shrink-0 items-center justify-center',
              'h-[16px] w-[16px] rounded-[4px]',
              'opacity-60 transition-opacity duration-[var(--duration-fast)]',
              'hover:opacity-100',
              'focus-visible:outline-none focus-visible:opacity-100'
            )}
            aria-label="Remove"
          >
            <RemoveIcon />
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

/* ─── Exports ─────────────────────────────────────────────────────────── */

export { Badge, badgeVariants };
export type { BadgeProps, BadgeVariantProps };

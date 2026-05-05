import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Icon Wrapper ─── */

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
} as const;

type IconSize = keyof typeof iconSizes;

interface IconProps extends React.SVGAttributes<SVGElement> {
  /** Size preset or pixel number */
  size?: IconSize | number;
}

/**
 * Wrapper for inline SVG icons.
 * Enforces consistent sizing, stroke width, and shrink-0 behavior.
 * CRM uses custom fill-based SVGs — this wrapper normalizes them.
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    const px = typeof size === 'number' ? size : iconSizes[size];

    return (
      <svg
        ref={ref}
        width={px}
        height={px}
        viewBox={`0 0 ${px} ${px}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('shrink-0 text-current', className)}
        aria-hidden="true"
        {...props}
      >
        {children}
      </svg>
    );
  },
);
Icon.displayName = 'Icon';

export { Icon, iconSizes };
export type { IconProps, IconSize };

/**
 * CRM Design System Example — Avatar Component
 *
 * Supports image + fallback, initials with deterministic color,
 * status indicators, and multiple sizes matching the sample CRM's UI.
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/* ─── Deterministic color palette for initials ────────────────────────── */

const avatarPalette = [
  { bg: '#E5EEFF', text: '#0D3688' },   // blue
  { bg: '#F3EEFF', text: '#6D28D9' },   // purple
  { bg: '#FEECF3', text: '#9D174D' },   // pink
  { bg: '#E0FCED', text: '#065F46' },   // green
  { bg: '#FFF3CC', text: '#874D00' },   // amber
  { bg: '#FEEEE1', text: '#9A3412' },   // orange
  { bg: '#E0F7FF', text: '#0E7490' },   // cyan
  { bg: '#FEF2F2', text: '#991B1B' },   // red
  { bg: '#F4FBCB', text: '#4D7C0F' },   // lime
  { bg: '#F8F9FB', text: '#505154' },   // gray
] as const;

/**
 * Generate a stable color index from a name string using a simple hash.
 */
function hashName(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0; // Convert to 32bit integer
  }
  return Math.abs(hash) % avatarPalette.length;
}

/**
 * Extract initials from a name string (up to 2 characters).
 */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/* ─── Avatar CVA variants ─────────────────────────────────────────────── */

const avatarVariants = cva(
  // Base — shared across all sizes and shapes
  [
    'relative inline-flex items-center justify-center',
    'shrink-0 overflow-hidden',
    'font-[family-name:var(--font-sans)]',
    'font-[number:var(--font-medium)]',
    'select-none',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'h-[20px] w-[20px] text-[length:9px]',
        sm: 'h-[24px] w-[24px] text-[length:10px]',
        md: 'h-[32px] w-[32px] text-[length:13px]',
        lg: 'h-[40px] w-[40px] text-[length:16px]',
        xl: 'h-[56px] w-[56px] text-[length:20px]',
      },
      shape: {
        circle: 'rounded-full',
        square: '',
      },
      bordered: {
        true: 'ring-2 ring-white',
        false: '',
      },
    },
    compoundVariants: [
      // Square shape gets scaled border-radius per size
      { shape: 'square', size: 'xs', className: 'rounded-[var(--radius-sm)]' },
      { shape: 'square', size: 'sm', className: 'rounded-[var(--radius-sm)]' },
      { shape: 'square', size: 'md', className: 'rounded-[var(--radius-md)]' },
      { shape: 'square', size: 'lg', className: 'rounded-[var(--radius)]' },
      { shape: 'square', size: 'xl', className: 'rounded-[var(--radius-lg)]' },
    ],
    defaultVariants: {
      size: 'md',
      shape: 'circle',
      bordered: false,
    },
  }
);

/* ─── Status indicator ────────────────────────────────────────────────── */

type StatusType = 'online' | 'offline' | 'away';

const statusColorMap: Record<StatusType, string> = {
  online: 'bg-[#1F8056]',   // green-500
  offline: 'bg-[#969CA6]',  // gray-400
  away: 'bg-[#B27316]',     // amber-500
};

// Status dot sizing per avatar size
const statusSizeMap: Record<string, string> = {
  xs: 'h-[6px] w-[6px] border',
  sm: 'h-[7px] w-[7px] border',
  md: 'h-[8px] w-[8px] border-[1.5px]',
  lg: 'h-[10px] w-[10px] border-2',
  xl: 'h-[12px] w-[12px] border-2',
};

// Status dot position offsets per avatar size (bottom-right corner)
const statusPositionMap: Record<string, string> = {
  xs: '-bottom-[1px] -right-[1px]',
  sm: '-bottom-[1px] -right-[1px]',
  md: '-bottom-[1px] -right-[1px]',
  lg: 'bottom-0 right-0',
  xl: 'bottom-[1px] right-[1px]',
};

/* ─── Avatar types ────────────────────────────────────────────────────── */

type AvatarVariantProps = VariantProps<typeof avatarVariants>;

interface AvatarOwnProps extends AvatarVariantProps {
  /** Image source URL */
  src?: string | null;
  /** Alt text for the image */
  alt?: string;
  /** Name used for initials fallback and color hash */
  name?: string;
  /** Status indicator dot */
  status?: StatusType;
  /** Fallback icon when no image or name is provided */
  fallbackIcon?: React.ReactNode;
  className?: string;
}

type AvatarProps = AvatarOwnProps &
  Omit<React.ComponentPropsWithoutRef<'span'>, keyof AvatarOwnProps>;

/* ─── Avatar Image sub-component ──────────────────────────────────────── */

interface AvatarImageProps {
  src: string;
  alt: string;
  onError: () => void;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, onError }) => (
  <img
    src={src}
    alt={alt}
    className="h-full w-full object-cover"
    onError={onError}
    draggable={false}
  />
);

/* ─── Default fallback icon (generic person silhouette) ───────────────── */

const DefaultFallbackIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="60%"
    height="60%"
    aria-hidden="true"
  >
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);

/* ─── Avatar component ────────────────────────────────────────────────── */

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      name,
      size = 'md',
      shape = 'circle',
      bordered = false,
      status,
      fallbackIcon,
      className,
      ...props
    },
    ref
  ) => {
    const [imgError, setImgError] = React.useState(false);
    const showImage = src && !imgError;
    const resolvedSize = size ?? 'md';

    // Compute initials and color for the fallback
    const initials = name ? getInitials(name) : '';
    const colorIndex = name ? hashName(name) : 0;
    const palette = avatarPalette[colorIndex];

    // Inline styles for initials background (not feasible with pure Tailwind since colors are dynamic)
    const initialsStyle: React.CSSProperties | undefined =
      !showImage && name
        ? { backgroundColor: palette.bg, color: palette.text }
        : !showImage && !name
          ? { backgroundColor: '#F8F9FB', color: '#969CA6' }
          : undefined;

    return (
      <span
        ref={ref}
        className={cn(
          avatarVariants({ size, shape, bordered }),
          className
        )}
        style={initialsStyle}
        role="img"
        aria-label={alt || name || 'Avatar'}
        {...props}
      >
        {/* Image layer */}
        {showImage && (
          <AvatarImage
            src={src}
            alt={alt || name || 'Avatar'}
            onError={() => setImgError(true)}
          />
        )}

        {/* Initials fallback */}
        {!showImage && name && (
          <span aria-hidden="true" className="leading-none">
            {initials}
          </span>
        )}

        {/* Icon fallback */}
        {!showImage && !name && (
          <span aria-hidden="true" className="flex items-center justify-center text-current">
            {fallbackIcon ?? <DefaultFallbackIcon />}
          </span>
        )}

        {/* Status indicator dot */}
        {status && (
          <span
            className={cn(
              'absolute rounded-full border-white',
              statusColorMap[status],
              statusSizeMap[resolvedSize],
              statusPositionMap[resolvedSize]
            )}
            aria-label={`Status: ${status}`}
          />
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';

/* ─── AvatarGroup — renders overlapping avatars ───────────────────────── */

interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Maximum number of avatars to show before the +N indicator */
  max?: number;
  /** Size applied to all child avatars */
  size?: AvatarVariantProps['size'];
  children: React.ReactNode;
  className?: string;
}

const overlapMap: Record<string, string> = {
  xs: '-ml-[6px]',
  sm: '-ml-[8px]',
  md: '-ml-[10px]',
  lg: '-ml-[12px]',
  xl: '-ml-[16px]',
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, size = 'md', className, children, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const resolvedSize = size ?? 'md';
    const visibleChildren = max != null ? childArray.slice(0, max) : childArray;
    const overflow = max != null ? childArray.length - max : 0;

    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center', className)}
        role="group"
        {...props}
      >
        {visibleChildren.map((child, index) => (
          <span
            key={index}
            className={cn(
              'relative',
              index > 0 && overlapMap[resolvedSize]
            )}
            style={{ zIndex: visibleChildren.length - index }}
          >
            {React.isValidElement<AvatarProps>(child)
              ? React.cloneElement(child, { size, bordered: true })
              : child}
          </span>
        ))}

        {overflow > 0 && (
          <span
            className={cn(
              avatarVariants({ size, shape: 'circle', bordered: true }),
              overlapMap[resolvedSize],
              'bg-[#F8F9FB] text-[color:var(--text-secondary)]'
            )}
            style={{ zIndex: 0 }}
            aria-label={`${overflow} more`}
          >
            +{overflow}
          </span>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

/* ─── Exports ─────────────────────────────────────────────────────────── */

export { Avatar, AvatarGroup, avatarVariants };
export type { AvatarProps, AvatarGroupProps, AvatarVariantProps, StatusType };

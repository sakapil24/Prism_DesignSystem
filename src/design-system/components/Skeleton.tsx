import * as React from 'react';
import { cn } from '../utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape variant */
  variant?: 'text' | 'circular' | 'rectangular';
  /** Width override */
  width?: string | number;
  /** Height override */
  height?: string | number;
  /** Use shimmer (gradient sweep) instead of pulse animation */
  shimmer?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'text', width, height, shimmer = false, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-[var(--surface-hover)]',
        shimmer ? 'animate-shimmer' : 'animate-pulse',
        variant === 'text' && 'h-4 rounded-[var(--radius-sm)]',
        variant === 'circular' && 'rounded-full',
        variant === 'rectangular' && 'rounded-[var(--radius)]',
        className,
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style,
      }}
      {...props}
    />
  ),
);
Skeleton.displayName = 'Skeleton';

/** Multi-line text skeleton */
function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? 'w-3/4' : 'w-full'}
        />
      ))}
    </div>
  );
}

export { Skeleton, SkeletonText };
export type { SkeletonProps };

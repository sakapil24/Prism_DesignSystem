/**
 * CRM Design System Example — Primitive Components
 *
 * Low-level, composable building blocks for the CRM design system.
 * All primitives forward refs, accept className, and use design tokens.
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/* ═══════════════════════════════════════════════════════════════════════════
 * Box — Polymorphic base element
 * ═══════════════════════════════════════════════════════════════════════════ */

interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = 'div', className, children, ...props }, ref) => {
    return React.createElement(Component, { ref, className, ...props }, children);
  }
);

Box.displayName = 'Box';

/* ═══════════════════════════════════════════════════════════════════════════
 * Flex — Flexbox layout wrapper
 * ═══════════════════════════════════════════════════════════════════════════ */

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

interface FlexOwnProps {
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  gap?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6 | 8;
  wrap?: FlexWrap;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type FlexProps = FlexOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof FlexOwnProps>;

const directionMap: Record<FlexDirection, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
};

const alignMap: Record<FlexAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyMap: Record<FlexJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const wrapMap: Record<FlexWrap, string> = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
};

const gapMap: Record<number, string> = {
  0: 'gap-0',
  0.5: 'gap-0.5',
  1: 'gap-1',
  1.5: 'gap-1.5',
  2: 'gap-2',
  2.5: 'gap-2.5',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
};

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      align,
      justify,
      gap,
      wrap,
      inline = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          inline ? 'inline-flex' : 'flex',
          direction && directionMap[direction],
          align && alignMap[align],
          justify && justifyMap[justify],
          gap !== undefined && gapMap[gap as number],
          wrap && wrapMap[wrap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

/* ═══════════════════════════════════════════════════════════════════════════
 * Stack — Vertical flex with spacing
 * ═══════════════════════════════════════════════════════════════════════════ */

interface StackProps extends Omit<FlexProps, 'direction'> {
  spacing?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6 | 8;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ spacing = 2, className, ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        direction="column"
        gap={spacing}
        className={className}
        {...props}
      />
    );
  }
);

Stack.displayName = 'Stack';

/* ═══════════════════════════════════════════════════════════════════════════
 * Grid — CSS Grid layout
 * ═══════════════════════════════════════════════════════════════════════════ */

interface GridOwnProps {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | string;
  gap?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6 | 8;
  rowGap?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6 | 8;
  columnGap?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6 | 8;
  className?: string;
  children?: React.ReactNode;
}

type GridProps = GridOwnProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof GridOwnProps>;

const columnsMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ columns = 1, gap, rowGap, columnGap, className, children, ...props }, ref) => {
    const isCustomColumns = typeof columns === 'string';

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          !isCustomColumns && columnsMap[columns as number],
          gap !== undefined && gapMap[gap],
          rowGap !== undefined && `row-${gapMap[rowGap]}`.replace('gap-', 'gap-y-'),
          columnGap !== undefined && `col-${gapMap[columnGap]}`.replace('gap-', 'gap-x-'),
          className
        )}
        style={isCustomColumns ? { gridTemplateColumns: columns as string } : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

/* ═══════════════════════════════════════════════════════════════════════════
 * Text — Typography component with CVA variants
 * ═══════════════════════════════════════════════════════════════════════════ */

const textVariants = cva(
  // base: inherit font-family from root (--font-sans), apply leading
  'font-[family-name:var(--font-sans)] leading-[var(--leading-snug)]',
  {
    variants: {
      size: {
        xs: 'text-[length:var(--text-xs)]',
        sm: 'text-[length:var(--text-sm)]',
        base: 'text-[length:var(--text-base)]',
        md: 'text-[length:var(--text-md)]',
        lg: 'text-[length:var(--text-lg)]',
        xl: 'text-[length:var(--text-xl)]',
      },
      weight: {
        normal: 'font-[number:var(--font-normal)]',
        medium: 'font-[number:var(--font-medium)]',
        semibold: 'font-[number:var(--font-semibold)]',
        bold: 'font-[number:var(--font-bold)]',
      },
      color: {
        primary: 'text-[color:var(--text-primary)]',
        secondary: 'text-[color:var(--text-secondary)]',
        muted: 'text-[color:var(--text-muted)]',
        inverse: 'text-[color:var(--text-inverse)]',
        link: 'text-[color:var(--text-link)]',
        success: 'text-[color:var(--text-success)]',
        warning: 'text-[color:var(--text-warning)]',
        error: 'text-[color:var(--text-error)]',
        inherit: 'text-inherit',
      },
      truncate: {
        true: 'truncate',
        false: '',
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
      color: 'primary',
      truncate: false,
    },
  }
);

type TextVariantProps = VariantProps<typeof textVariants>;

interface TextOwnProps extends TextVariantProps {
  as?: 'span' | 'p' | 'label' | 'div' | 'em' | 'strong' | 'small';
  className?: string;
  children?: React.ReactNode;
}

type TextProps = TextOwnProps &
  Omit<React.ComponentPropsWithoutRef<'span'>, keyof TextOwnProps>;

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as: Component = 'span', size, weight, color, truncate, className, children, ...props }, ref) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(textVariants({ size, weight, color, truncate }), className),
        ...props,
      },
      children
    );
  }
);

Text.displayName = 'Text';

/* ═══════════════════════════════════════════════════════════════════════════
 * Heading — Semantic heading component
 * ═══════════════════════════════════════════════════════════════════════════ */

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const headingSizeDefaults: Record<HeadingLevel, TextVariantProps['size']> = {
  1: 'xl',
  2: 'lg',
  3: 'md',
  4: 'base',
  5: 'sm',
  6: 'xs',
};

const headingWeightDefaults: Record<HeadingLevel, TextVariantProps['weight']> = {
  1: 'bold',
  2: 'semibold',
  3: 'semibold',
  4: 'semibold',
  5: 'medium',
  6: 'medium',
};

interface HeadingOwnProps {
  level?: HeadingLevel;
  size?: TextVariantProps['size'];
  weight?: TextVariantProps['weight'];
  color?: TextVariantProps['color'];
  truncate?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type HeadingProps = HeadingOwnProps &
  Omit<React.ComponentPropsWithoutRef<'h1'>, keyof HeadingOwnProps>;

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, size, weight, color = 'primary', truncate, className, children, ...props }, ref) => {
    const tag = `h${level}` as const;
    const resolvedSize = size ?? headingSizeDefaults[level];
    const resolvedWeight = weight ?? headingWeightDefaults[level];

    return React.createElement(
      tag,
      {
        ref,
        className: cn(
          textVariants({
            size: resolvedSize,
            weight: resolvedWeight,
            color,
            truncate: truncate ?? false,
          }),
          className
        ),
        ...props,
      },
      children
    );
  }
);

Heading.displayName = 'Heading';

/* ═══════════════════════════════════════════════════════════════════════════
 * Divider — Horizontal rule / separator
 * ═══════════════════════════════════════════════════════════════════════════ */

interface DividerProps extends React.ComponentPropsWithoutRef<'hr'> {
  /** Visual weight of the divider */
  variant?: 'default' | 'subtle' | 'strong';
  /** Optional spacing around the divider */
  spacing?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}

const dividerVariants: Record<string, string> = {
  default: 'border-[color:var(--border-default)]',
  subtle: 'border-[color:var(--border-subtle)]',
  strong: 'border-[color:var(--border-strong)]',
};

const dividerSpacingMap: Record<number, string> = {
  0: 'my-0',
  1: 'my-1',
  2: 'my-2',
  3: 'my-3',
  4: 'my-4',
};

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ variant = 'default', spacing = 0, className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          'border-0 border-t',
          dividerVariants[variant],
          dividerSpacingMap[spacing],
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

/* ═══════════════════════════════════════════════════════════════════════════
 * VisuallyHidden — Screen-reader-only utility
 * ═══════════════════════════════════════════════════════════════════════════ */

interface VisuallyHiddenProps extends React.ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode;
}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('sr-only', className)}
        {...props}
      />
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';

/* ═══════════════════════════════════════════════════════════════════════════
 * Exports
 * ═══════════════════════════════════════════════════════════════════════════ */

export { Box, Flex, Stack, Grid, Text, Heading, Divider, VisuallyHidden };
export { textVariants };
export type {
  BoxProps,
  FlexProps,
  StackProps,
  GridProps,
  TextProps,
  TextVariantProps,
  HeadingProps,
  HeadingLevel,
  DividerProps,
  VisuallyHiddenProps,
};

/**
 * CRM Design System Example — Segmented Control
 *
 * List/Board view toggle. Radio group with pill styling:
 * active option gets white bg + shadow, inactive gets muted text.
 *
 * Observed on: Companies list view bar (list/board toggle)
 * Screenshot ref: companies-list-page.png
 */

import * as React from 'react';
import { cn } from '../utils/cn';

interface SegmentedControlOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  size?: 'sm' | 'md';
}

const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ className, options, value, onChange, size = 'md', ...props }, ref) => (
    <div
      ref={ref}
      role="radiogroup"
      className={cn(
        'inline-flex items-center rounded-[var(--radius)] bg-[var(--surface-muted)] p-[2px]',
        className,
      )}
      {...props}
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'inline-flex items-center justify-center gap-1.5 rounded-[var(--radius-md)]',
              'text-[14px] font-medium whitespace-nowrap select-none',
              'transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)]',
              size === 'sm' ? 'h-[22px] px-2 text-[12px]' : 'h-[26px] px-3',
              isActive
                ? 'bg-white text-[var(--text-primary)] shadow-[var(--shadow-sm)]'
                : 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)]',
            )}
          >
            {option.icon && (
              <span className="inline-flex shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5">
                {option.icon}
              </span>
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  ),
);
SegmentedControl.displayName = 'SegmentedControl';

export { SegmentedControl };
export type { SegmentedControlProps, SegmentedControlOption };

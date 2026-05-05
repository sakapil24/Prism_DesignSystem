/**
 * CRM Design System Example — DatePicker Component
 *
 * Calendar date picker using Popover + a custom calendar grid.
 * Matches the sample CRM's minimal date field pattern.
 */

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../utils/cn';

/* ─── Helpers ─────────────────────────────────────────────────────────── */

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

const DAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const;

/* ─── Calendar Grid ───────────────────────────────────────────────────── */

interface CalendarProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  className?: string;
}

function Calendar({ value, onChange, className }: CalendarProps) {
  const today = new Date();
  const [viewYear, setViewYear] = React.useState(value?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = React.useState(value?.getMonth() ?? today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isSelected = (day: number) =>
    value &&
    value.getFullYear() === viewYear &&
    value.getMonth() === viewMonth &&
    value.getDate() === day;

  const isToday = (day: number) =>
    today.getFullYear() === viewYear &&
    today.getMonth() === viewMonth &&
    today.getDate() === day;

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  return (
    <div className={cn('w-[252px] p-3', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <button
          type="button"
          onClick={prevMonth}
          className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] transition-colors duration-[var(--duration-fast)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M8.5 3.5L5 7L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-[var(--text-sm)] font-[var(--font-semibold)] text-[var(--text-primary)]">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] transition-colors duration-[var(--duration-fast)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5.5 3.5L9 7L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((label) => (
          <div
            key={label}
            className="flex h-8 items-center justify-center text-[var(--text-xs)] font-[var(--font-medium)] text-[var(--text-muted)]"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7">
        {days.map((day, i) => (
          <div key={i} className="flex items-center justify-center">
            {day !== null ? (
              <button
                type="button"
                onClick={() => onChange?.(new Date(viewYear, viewMonth, day))}
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-full',
                  'text-[var(--text-sm)] font-[var(--font-medium)]',
                  'transition-colors duration-[var(--duration-fast)]',
                  'focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]',
                  isSelected(day)
                    ? 'bg-[var(--accent-primary)] text-white'
                    : isToday(day)
                      ? 'bg-[var(--surface-subtle)] text-[var(--text-primary)] hover:bg-[var(--accent-primary)] hover:text-white'
                      : 'text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                )}
              >
                {day}
              </button>
            ) : (
              <span className="h-8 w-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── DatePicker ──────────────────────────────────────────────────────── */

export interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  hasError?: boolean;
  className?: string;
}

function DatePicker({
  value,
  onChange,
  placeholder = 'Select date',
  disabled,
  hasError,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const formattedValue = value
    ? value.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : null;

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger
        disabled={disabled}
        className={cn(
          'inline-flex h-8 items-center gap-2 rounded-[var(--radius)] px-2',
          'text-[var(--text-base)] font-[var(--font-medium)]',
          'border border-[var(--border-default)] bg-white',
          'transition-[border-color,box-shadow] duration-[var(--duration-moderate)] ease-[var(--ease-default)]',
          'hover:border-[var(--border-strong)]',
          'focus-visible:outline-none focus-visible:border-[var(--border-accent)] focus-visible:shadow-[var(--shadow-focus-ring)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          hasError && 'border-[var(--border-error)]',
          className
        )}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[var(--icon-muted)]">
          <rect x="1.75" y="2.625" width="10.5" height="9.625" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
          <path d="M1.75 5.25H12.25" stroke="currentColor" strokeWidth="1.25" />
          <path d="M4.375 1.75V3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M9.625 1.75V3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
        <span className={cn(!formattedValue && 'text-[var(--text-faint)]')}>
          {formattedValue ?? placeholder}
        </span>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          sideOffset={4}
          className={cn(
            'z-50 rounded-[12px] bg-white outline-none',
            'shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px,rgba(0,0,0,0.06)_0px_2px_8px_0px,rgba(0,0,0,0.04)_0px_0px_0px_1px]',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-1',
            'data-[side=top]:slide-in-from-bottom-1',
            'duration-200'
          )}
        >
          <Calendar
            value={value}
            onChange={(date) => {
              onChange?.(date);
              setOpen(false);
            }}
          />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

DatePicker.displayName = 'DatePicker';

export { DatePicker, Calendar };

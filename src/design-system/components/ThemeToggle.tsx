/**
 * CRM Design System Example — ThemeToggle
 *
 * A toggle switch for light/dark theme.
 * Consumes ThemeProvider context.
 */

import * as React from 'react';
import { useTheme } from './ThemeProvider';
import { cn } from '../utils/cn';

export interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex h-8 w-[60px] items-center rounded-full px-1',
        'border border-[var(--border-default)] bg-[var(--surface-muted)]',
        'transition-colors duration-[var(--duration-moderate)] ease-[var(--ease-default)]',
        'focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]',
        className
      )}
    >
      {/* Thumb */}
      <span
        className={cn(
          'inline-flex h-6 w-6 items-center justify-center rounded-full',
          'bg-[var(--surface-elevated)] shadow-[var(--shadow-sm)]',
          'transition-transform duration-[var(--duration-moderate)] ease-[var(--ease-default)]',
          isDark ? 'translate-x-[28px]' : 'translate-x-0'
        )}
      >
        {isDark ? (
          /* Moon */
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--icon-default)]">
            <path d="M12.25 7.58333C11.7528 9.94027 9.63044 11.6667 7.10064 11.6667C4.17731 11.6667 1.81665 9.30603 1.81665 6.38269C1.81665 3.85289 3.54307 1.73056 5.89998 1.23333C5.32219 2.08052 4.98331 3.09702 4.98331 4.19099C4.98331 7.01463 7.25969 9.29099 10.0833 9.29099C11.1773 9.29099 12.1938 8.95211 13.041 8.37432C12.8205 8.12863 12.5555 7.83138 12.25 7.58333Z" fill="currentColor"/>
          </svg>
        ) : (
          /* Sun */
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--icon-default)]">
            <circle cx="7" cy="7" r="2.5" fill="currentColor"/>
            <path d="M7 1.75V2.625M7 11.375V12.25M12.25 7H11.375M2.625 7H1.75M10.7123 3.28769L10.0936 3.90636M3.90636 10.0936L3.28769 10.7123M10.7123 10.7123L10.0936 10.0936M3.90636 3.90636L3.28769 3.28769" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
          </svg>
        )}
      </span>
    </button>
  );
}

ThemeToggle.displayName = 'ThemeToggle';

export { ThemeToggle };

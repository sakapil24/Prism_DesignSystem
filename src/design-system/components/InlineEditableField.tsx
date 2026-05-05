/**
 * CRM Design System Example — Inline Editable Field
 *
 * Click-to-edit text field for detail panels.
 * Display mode: shows text with hover highlight.
 * Edit mode: shows input with focus ring.
 * Save on Enter/blur, cancel on Escape.
 *
 * Composes inside DetailField as the value slot.
 *
 * Observed on: Company detail right panel field values
 * Screenshot ref: company-detail-overview.png (right panel)
 */

import * as React from 'react';
import { cn } from '../utils/cn';

interface InlineEditableFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current display value */
  value: string;
  /** Placeholder when value is empty */
  placeholder?: string;
  /** Callback when value is saved */
  onChange?: (value: string) => void;
  /** Disable editing */
  disabled?: boolean;
}

function InlineEditableField({
  className,
  value,
  placeholder = 'Add value...',
  onChange,
  disabled = false,
  ...props
}: InlineEditableFieldProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(value);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setDraft(value);
  }, [value]);

  React.useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const save = () => {
    const trimmed = draft.trim();
    if (trimmed !== value) {
      onChange?.(trimmed);
    }
    setIsEditing(false);
  };

  const cancel = () => {
    setDraft(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      save();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cancel();
    }
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={save}
        onKeyDown={handleKeyDown}
        className={cn(
          'w-full px-1.5 py-0.5 -mx-1.5 -my-0.5',
          'text-[14px] text-[var(--text-primary)]',
          'bg-white rounded-[var(--radius-sm)]',
          'border border-[var(--border-accent)]',
          'shadow-[var(--shadow-focus-ring)]',
          'outline-none',
          className,
        )}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }

  return (
    <div
      role={disabled ? undefined : 'button'}
      tabIndex={disabled ? undefined : 0}
      onClick={disabled ? undefined : () => setIsEditing(true)}
      onKeyDown={disabled ? undefined : (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsEditing(true);
        }
      }}
      className={cn(
        'px-1.5 py-0.5 -mx-1.5 -my-0.5 rounded-[var(--radius-sm)]',
        'text-[14px] min-h-[24px]',
        value
          ? 'text-[var(--text-primary)]'
          : 'text-[var(--text-faint)]',
        !disabled && 'cursor-text hover:bg-[var(--surface-hover)] transition-colors duration-[var(--duration-fast)]',
        className,
      )}
      {...props}
    >
      {value || placeholder}
    </div>
  );
}

export { InlineEditableField };
export type { InlineEditableFieldProps };

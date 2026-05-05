import * as React from 'react';
import { cn } from '../utils/cn';

/* ─────────────────────────────────────────────
 * FormField Context
 * ───────────────────────────────────────────── */

interface FormFieldContextValue {
  id: string;
  hasError: boolean;
  isRequired: boolean;
  isDisabled: boolean;
}

const FormFieldContext = React.createContext<FormFieldContextValue>({
  id: '',
  hasError: false,
  isRequired: false,
  isDisabled: false,
});

/** Hook to access the FormField context from child components */
export function useFormField() {
  return React.useContext(FormFieldContext);
}

/* ─────────────────────────────────────────────
 * FormField
 * ───────────────────────────────────────────── */

export interface FormFieldProps {
  /** Unique id — forwarded to label htmlFor and child inputs */
  id?: string;
  /** Label text rendered above the input */
  label?: React.ReactNode;
  /** Helper text rendered below the input */
  helperText?: React.ReactNode;
  /** Error message — replaces helper text when present */
  error?: React.ReactNode;
  /** Marks the field as required (appends red asterisk to label) */
  required?: boolean;
  /** Marks the field as disabled */
  disabled?: boolean;
  /** The form control (Input, Select, Checkbox, etc.) */
  children: React.ReactNode;
  /** Additional class name for the wrapper */
  className?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      id,
      label,
      helperText,
      error,
      required = false,
      disabled = false,
      children,
      className,
    },
    ref
  ) => {
    const generatedId = React.useId();
    const fieldId = id ?? generatedId;
    const hasError = !!error;

    const contextValue = React.useMemo<FormFieldContextValue>(
      () => ({ id: fieldId, hasError, isRequired: required, isDisabled: disabled }),
      [fieldId, hasError, required, disabled]
    );

    return (
      <FormFieldContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn('flex flex-col gap-1.5', className)}
          role="group"
          aria-describedby={
            hasError
              ? `${fieldId}-error`
              : helperText
                ? `${fieldId}-helper`
                : undefined
          }
        >
          {/* ── Label ── */}
          {label && (
            <FormLabel htmlFor={fieldId} required={required} disabled={disabled}>
              {label}
            </FormLabel>
          )}

          {/* ── Control slot ── */}
          {children}

          {/* ── Error / Helper ── */}
          {hasError ? (
            <FormError id={`${fieldId}-error`}>{error}</FormError>
          ) : helperText ? (
            <FormHelper id={`${fieldId}-helper`}>{helperText}</FormHelper>
          ) : null}
        </div>
      </FormFieldContext.Provider>
    );
  }
);

FormField.displayName = 'FormField';

/* ─────────────────────────────────────────────
 * FormLabel
 * ───────────────────────────────────────────── */

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  disabled?: boolean;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, required, disabled, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-[var(--text-sm)] font-[var(--font-medium)] leading-[var(--leading-snug)]',
        'text-[var(--text-secondary)]',
        'select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span
          className="ml-0.5 text-[var(--text-error)]"
          aria-hidden="true"
        >
          *
        </span>
      )}
    </label>
  )
);

FormLabel.displayName = 'FormLabel';

/* ─────────────────────────────────────────────
 * FormHelper
 * ───────────────────────────────────────────── */

export interface FormHelperProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormHelper = React.forwardRef<HTMLParagraphElement, FormHelperProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-[var(--text-xs)] font-[var(--font-normal)] leading-[var(--leading-normal)]',
        'text-[var(--text-muted)]',
        className
      )}
      {...props}
    />
  )
);

FormHelper.displayName = 'FormHelper';

/* ─────────────────────────────────────────────
 * FormError
 * ───────────────────────────────────────────── */

export interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Apply shake animation for validation errors */
  shake?: boolean;
}

const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ className, shake = false, ...props }, ref) => (
    <p
      ref={ref}
      role="alert"
      className={cn(
        'text-[var(--text-xs)] font-[var(--font-normal)] leading-[var(--leading-normal)]',
        'text-[var(--text-error)]',
        shake && 'animate-shake',
        className
      )}
      {...props}
    />
  )
);

FormError.displayName = 'FormError';

/* ─────────────────────────────────────────────
 * Exports
 * ───────────────────────────────────────────── */

export { FormField, FormLabel, FormHelper, FormError };

import type { ReactNode } from 'react'

export const bookingControlClassName =
  'w-full rounded-[12px] border border-[#D9D7E3] bg-white px-4 py-3 font-sans text-[14px] leading-[1.4] text-text-dark transition-colors duration-200 placeholder:text-secondary/60 focus:border-primary-violet focus:outline-none focus:ring-2 focus:ring-primary-violet/15 disabled:cursor-not-allowed disabled:bg-[#F7F7F8] disabled:text-secondary disabled:opacity-70'

export const bookingLabelClassName =
  'mb-2 block font-sans text-[14px] font-medium leading-[1.3] text-text-dark'

export const bookingHelperClassName =
  'mt-1.5 font-sans text-[13px] leading-[1.45] text-secondary'

export const bookingErrorClassName =
  'mt-1.5 font-sans text-[13px] leading-[1.4] text-[#C62828]'

interface BookingFieldShellProps {
  id: string
  label: string
  helperText?: string
  error?: string
  children: ReactNode
  className?: string
}

export function BookingFieldShell({
  id,
  label,
  helperText,
  error,
  children,
  className = '',
}: BookingFieldShellProps) {
  const helperId = helperText
    ? `${id}-helper`
    : undefined

  const errorId = error
    ? `${id}-error`
    : undefined

  const describedBy =
    [helperId, errorId]
      .filter(Boolean)
      .join(' ') || undefined

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={bookingLabelClassName}
      >
        {label}
      </label>

      {helperText && (
        <p
          id={helperId}
          className={`${bookingHelperClassName} mb-2`}
        >
          {helperText}
        </p>
      )}

      <div aria-describedby={describedBy}>
        {children}
      </div>

      {error && (
        <p
          id={errorId}
          className={bookingErrorClassName}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}

interface BookingTextInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'email' | 'date'
  helperText?: string
  error?: string
  required?: boolean
  disabled?: boolean
  min?: string
  className?: string
}

export function BookingTextInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  helperText,
  error,
  required,
  disabled = false,
  min,
  className = '',
}: BookingTextInputProps) {
  return (
    <BookingFieldShell
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      className={className}
    >
      <input
        id={id}
        data-field={id}
        type={type}
        value={value}
        min={min}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className={`
          ${bookingControlClassName}
          ${
            error
              ? 'border-[#C62828] focus:border-[#C62828] focus:ring-[#C62828]/15'
              : ''
          }
        `}
        aria-invalid={Boolean(error)}
      />
    </BookingFieldShell>
  )
}

interface BookingSelectProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder?: string
  helperText?: string
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export function BookingSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  helperText,
  error,
  required,
  disabled = false,
  className = '',
}: BookingSelectProps) {
  return (
    <BookingFieldShell
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      className={className}
    >
      <select
        id={id}
        data-field={id}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className={`
          ${bookingControlClassName}
          appearance-none
          bg-[length:12px]
          bg-[right_16px_center]
          bg-no-repeat
          pr-10
          ${
            error
              ? 'border-[#C62828] focus:border-[#C62828] focus:ring-[#C62828]/15'
              : ''
          }
        `}
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%2371717A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        }}
        aria-invalid={Boolean(error)}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </BookingFieldShell>
  )
}

interface BookingComboboxProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  options: readonly string[]
  placeholder?: string
  helperText?: string
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export function BookingCombobox({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  helperText,
  error,
  required,
  disabled = false,
  className = '',
}: BookingComboboxProps) {
  const listId = `${id}-options`

  return (
    <BookingFieldShell
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      className={className}
    >
      <input
        id={id}
        data-field={id}
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listId}
        list={disabled ? undefined : listId}
        value={value}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(event) =>
          onChange(event.target.value)
        }
        className={`
          ${bookingControlClassName}
          ${
            error
              ? 'border-[#C62828] focus:border-[#C62828] focus:ring-[#C62828]/15'
              : ''
          }
        `}
        aria-invalid={Boolean(error)}
      />

      {!disabled && (
        <datalist id={listId}>
          {options.map((option) => (
            <option
              key={option}
              value={option}
            />
          ))}
        </datalist>
      )}
    </BookingFieldShell>
  )
}

interface BookingTextareaProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  helperText?: string
  error?: string
  required?: boolean
  disabled?: boolean
  rows?: number
  maxLength?: number
  showCount?: boolean
  className?: string
}

export function BookingTextarea({
  id,
  label,
  value,
  onChange,
  placeholder,
  helperText,
  error,
  required,
  disabled = false,
  rows = 5,
  maxLength,
  showCount = false,
  className = '',
}: BookingTextareaProps) {
  return (
    <BookingFieldShell
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      className={className}
    >
      <textarea
        id={id}
        data-field={id}
        value={value}
        rows={rows}
        maxLength={maxLength}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className={`
          ${bookingControlClassName}
          min-h-[140px]
          resize-y
          ${
            error
              ? 'border-[#C62828] focus:border-[#C62828] focus:ring-[#C62828]/15'
              : ''
          }
        `}
        aria-invalid={Boolean(error)}
      />

      {showCount && maxLength && (
        <p className="mt-1.5 text-right font-sans text-[12px] text-secondary">
          {value.length}/{maxLength}
        </p>
      )}
    </BookingFieldShell>
  )
}
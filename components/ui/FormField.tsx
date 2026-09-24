import React from "react";

export interface FormFieldWrapperProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: (props: {
    id: string;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
  }) => React.ReactNode;
  className?: string;
}

/**
 * Accessible wrapper for form controls providing label, hint, and error associations.
 */
export function FormField({
  id,
  label,
  error,
  hint,
  required = false,
  children,
  className = "",
}: FormFieldWrapperProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label htmlFor={id} className="block text-xs font-semibold text-[#0B1F3A]">
        {label}{" "}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {hint && (
        <p id={hintId} className="text-[11px] text-[#5B6B7F]">
          {hint}
        </p>
      )}

      {children({
        id,
        "aria-describedby": describedBy,
        "aria-invalid": Boolean(error),
      })}

      {error && (
        <p id={errorId} className="text-xs text-red-600 font-medium mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full min-h-[44px] px-3.5 py-2 text-sm bg-white text-[#1F2937] placeholder-[#94A3B8] border rounded-[10px] transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1 ${
          error ? "border-red-400 focus:ring-red-500" : "border-[#E2E8F0] hover:border-[#CBD5E1]"
        } ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`w-full min-h-[44px] px-3.5 py-2 text-sm bg-white text-[#1F2937] border rounded-[10px] transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1 cursor-pointer ${
          error ? "border-red-400 focus:ring-red-500" : "border-[#E2E8F0] hover:border-[#CBD5E1]"
        } ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", error, rows = 3, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={`w-full p-3.5 text-sm bg-white text-[#1F2937] placeholder-[#94A3B8] border rounded-[10px] transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1 resize-y ${
          error ? "border-red-400 focus:ring-red-500" : "border-[#E2E8F0] hover:border-[#CBD5E1]"
        } ${className}`}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", label, id, ...props }, ref) => {
    return (
      <div className="flex items-start gap-2.5">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={`h-4 w-4 rounded-[4px] border-[#CBD5E1] text-[#2563EB] focus:ring-2 focus:ring-[#2563EB] mt-0.5 cursor-pointer ${className}`}
          {...props}
        />
        <label
          htmlFor={id}
          className="text-xs text-[#1F2937] cursor-pointer select-none leading-snug"
        >
          {label}
        </label>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

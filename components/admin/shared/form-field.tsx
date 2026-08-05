import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const inputClassName =
  "h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-400";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-neutral-800">
        {label}
      </label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-neutral-500">{hint}</p>
      ) : null}
      {error ? <p className="text-xs text-rose-600">{error}</p> : null}
    </div>
  );
}

type FormInputProps = React.ComponentProps<"input"> & {
  error?: boolean;
};

export function FormInput({ className, error, ...props }: FormInputProps) {
  return (
    <input
      className={cn(
        inputClassName,
        error && "border-rose-300 focus:border-rose-400",
        className,
      )}
      {...props}
    />
  );
}

type FormSelectProps = React.ComponentProps<"select"> & {
  error?: boolean;
};

export function FormSelect({ className, error, children, ...props }: FormSelectProps) {
  return (
    <select
      className={cn(
        inputClassName,
        "appearance-none pr-9",
        error && "border-rose-300 focus:border-rose-400",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

type FormTextareaProps = React.ComponentProps<"textarea"> & {
  error?: boolean;
};

export function FormTextarea({ className, error, ...props }: FormTextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-[96px] w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-400",
        error && "border-rose-300 focus:border-rose-400",
        className,
      )}
      {...props}
    />
  );
}

type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function FormSection({
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-6",
        className,
      )}
    >
      <div className="mb-5">
        <h2 className="text-base font-semibold text-neutral-950">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-neutral-500">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

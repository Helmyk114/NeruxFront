import { InputOtp } from "@heroui/react";
interface InputOtpProps {
  length: number;
  size: "sm" | "md" | "lg";
  variant: "bordered" | "underlined" | "faded";
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
}

export function InputsOtp({
  length,
  size,
  variant,
  className,
  value,
  onValueChange,
}: InputOtpProps): JSX.Element {
  return (
    <InputOtp
      classNames={{
        segmentWrapper: 'gap-x-4',
        segment: 'dark:border-brand-first',
      }}
      length={length}
      size={size}
      variant={variant}
      className={className}
      value={value}
      onValueChange={onValueChange}
    />
  );
}

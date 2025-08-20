import { InputOtp } from "@heroui/react";
interface InputOtpProps {
  length: number;
  size: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary";
  variant: "bordered" | "underlined" | "faded";
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
}

export function InputsOtp({
  length,
  size,
  color,
  variant,
  className,
  value,
  onValueChange,
}: InputOtpProps): JSX.Element {
  return (
    <InputOtp
      length={length}
      size={size}
      color={color}
      variant={variant}
      className={className}
      value={value}
      onValueChange={onValueChange}
    />
  );
}

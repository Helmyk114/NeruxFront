import { InputOtp } from "@heroui/react";
import { Input } from "postcss";
interface InputOtpProps{
    length: number;
    size: "sm" | "md" | "lg";
    color?: "default" | "primary" | "secondary" ;
    variant: "bordered" | "underlined" | "faded";
    className?: {segmentWrapper: string, segment: string};
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
    onValueChange
}: InputOtpProps): JSX.Element {
    
  return (
    <div>
    <InputOtp
      length={length}
      size={size}
      color={color}
      variant={variant}
      className={className?.segmentWrapper}
      value={value}
      onValueChange={onValueChange}
    />
    </div>
  )
}
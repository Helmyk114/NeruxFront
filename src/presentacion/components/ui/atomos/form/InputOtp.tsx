import { InputOtp } from "@heroui/react";
interface InputOtpProps{
    length: number;
    size: "sm" | "md" | "lg";
    color?: "default" | "primary" | "secondary" ;
    variant: "bordered" | "filled" | "underlined" | "faded";
    className?: string;
    value: string;
    onValueChange: (value: string) => void;
}

export default function InputsOtp({
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
      variant="faded"
      className={className}
      value={value}
      onValueChange={onValueChange}
    />
    </div>
  )
}
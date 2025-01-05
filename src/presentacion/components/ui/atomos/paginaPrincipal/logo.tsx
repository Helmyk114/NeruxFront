import React from "react";

export interface LogoProps {
  src: string;
  alt: string;
  width?: string;
  heigth?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  className,
  heigth,
  width,
}) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        height={heigth}
        width={width}
        className={className}
      />
    </div>
  );
};

export interface LogoProps {
  src: string;
  alt: string;
  width?: string;
  heigth?: string;
  className?: string;
}

export function Logo({
  src,
  alt,
  className,
  heigth,
  width,
}: LogoProps): JSX.Element {
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
}

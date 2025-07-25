interface BackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export function Background({
  className = "bg-base-home",
  children,
}: BackgroundProps): JSX.Element {
  return (
    <div className={`${className} min-h-screen w-full overflow-hidden`}>
      {children}
    </div>
  );
}

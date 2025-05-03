import React from "react";

interface BackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export function Background({
  className = "bg-background-one",
  children,
}: BackgroundProps): JSX.Element {
  return <div className={`${className} min-h-screen`}>{children}</div>;
}

import React from "react";

interface BackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ className = "bg-black", children }) => {
  return <div className={`${className} min-h-screen`}>{children}</div>;
};

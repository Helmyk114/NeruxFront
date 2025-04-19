import React from "react";

interface TemplatePageProps {
  sideBar: React.ReactNode;
  mainContent: React.ReactNode;
}
export function TemplatePageTable({
  sideBar,
  mainContent,
}: TemplatePageProps): JSX.Element {
  return (
    <div className="flex min-h-screen w-full">
      <div>{sideBar}</div>
      <div className="flex-1 min-w-px m-8">{mainContent}</div>
    </div>
  );
}

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
      <div className="fixed top-0 left-0">{sideBar}</div>
      <div className="flex-1 pl-64 min-w-px m-8">{mainContent}</div>
    </div>
  );
}

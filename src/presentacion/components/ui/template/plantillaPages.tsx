import React from "react";
import { sidebarStore } from "../../../../store/sidebarStore";
import { Title1, Title2 } from "../atomos";
import { BreadcrumbsCustom } from "../organismo/breadcrumb/breadcrumb";

interface TemplatePageProps {
  sideBar: React.ReactNode;
  mainContent: React.ReactNode;
  titulo1: string;
  titulo2: string;
}

export function TemplatePageTable({
  sideBar,
  mainContent,
  titulo1,
  titulo2,
}: TemplatePageProps): JSX.Element {
  const { isCollapsed } = sidebarStore();
  return (
    <div className="flex h-screen overflow-hidden">
      {sideBar}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? "p-12" : "p-12"
        }  overflow-auto h-screen`}
      >
        <BreadcrumbsCustom />
        <Title1 clasname="mt-4 mb-2 text-start" titulo={titulo1 || ""} />
        <Title2 clasname="mb-[12.67px]" titulo={titulo2 || ""} />
        {mainContent}
      </div>
    </div>
  );
}

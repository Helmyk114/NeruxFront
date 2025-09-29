import { sidebarStore } from "@/store";
import { Sidebar } from "../organismo";
import { Title } from "../atomos/textos/Titles";

interface TemplatePageProps {
  mainContent: React.ReactNode;
  titulo1?: string;
  titulo2?: string;
}

export function TemplatePageTable({
  mainContent,
  titulo1,
  titulo2,
}: TemplatePageProps): JSX.Element {
  const { isCollapsed } = sidebarStore();
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? "p-12" : "p-12"
        }  overflow-auto h-screen`}
      >
        <Title.PageTitle titulo={titulo1 || ""} />
        <Title.Subtitle titulo={titulo2 || ""} />
        {mainContent}
      </div>
    </div>
  );
}

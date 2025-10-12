import { useSidebarStore } from "@/common/store";
import { Title1, Title2 } from "../atom/typography";
import { Sidebar } from "../organism/sidebar";

interface MainPageTemplateProps {
  mainContent: React.ReactNode;
  titulo1?: string;
  titulo2?: string;
}

export function MainPageTemplate({
  mainContent,
  titulo1,
  titulo2,
}: MainPageTemplateProps): JSX.Element {
  const { isCollapsed } = useSidebarStore();
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? "p-12" : "p-12"
        }  overflow-auto h-screen`}
      >
        <Title1 clasname=" mb-1.5 text-start" titulo={titulo1 || ""} />
        <Title2 clasname="mb-6" titulo={titulo2 || ""} />
        {mainContent}
      </div>
    </div>
  );
}
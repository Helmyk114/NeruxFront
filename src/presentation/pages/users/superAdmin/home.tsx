import { MainPageTemplate } from "@/presentation/components/ui/template";

export function Home(): JSX.Element {
  return (
    <MainPageTemplate
      mainContent={
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">
            Bienvenido a la página de inicio Super Admin
          </h1>
          <p className="mt-4 text-lg">
            Esta es la página de inicio de tu aplicación.
          </p>
        </div>
      }
    />
  );
}
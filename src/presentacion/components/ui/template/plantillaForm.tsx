import { CardSimple } from "@/presentacion/components/ui/atomos";

interface TemplatePageFormProps {
  children: React.ReactNode;
}
export function TemplatePageForm({
  children,
}: TemplatePageFormProps): JSX.Element {
  return (
    <div className="w-full">
      <CardSimple className="bg-background-two">{children}</CardSimple>
    </div>
  );
}

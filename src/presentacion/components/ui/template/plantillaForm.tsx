import { CardSimple } from "@/presentacion/components/ui/atomos";

interface TemplatePageFormProps {
  children: React.ReactNode;
}
export function TemplatePageForm({
  children,
}: TemplatePageFormProps): JSX.Element {
  return (
    <div className="w-full">
      <CardSimple className="bg-base-second">{children}</CardSimple>
    </div>
  );
}

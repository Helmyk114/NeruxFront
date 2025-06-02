import CardSimple from "../atomos/Card/CardSimple";

interface TemplatePageFormProps {
  children: React.ReactNode;
}
export function TemplatePageForm({ children }: TemplatePageFormProps): JSX.Element {
  return (
    <div className="w-full">
      <CardSimple
        className="bg-background-two"
        children={children}
      />
    </div>
  );
}

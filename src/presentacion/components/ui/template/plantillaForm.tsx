import { Title1, Title2 } from "../atomos";
import CardSimple from "../atomos/Card/CardSimple";

interface TemplatePageFormProps {
  title1: string;
  title2: string;
  children: React.ReactNode;
}
export function TemplatePageForm({ title1, title2, children }: TemplatePageFormProps): JSX.Element {
  return (
    <div className="w-full">
      <div className="ml-[30px]">
        <Title1
          clasname="mb-[40px] text-star"
          titulo={title1}
        />
        <Title2
          clasname="mb-[12.67px]"
          titulo={title2}
        />
      </div>
      <CardSimple
        className="bg-background-two"
        children={children}
      />
    </div>
  );
}

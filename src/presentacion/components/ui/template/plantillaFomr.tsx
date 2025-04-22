import { Title1, Title2 } from "../atomos";

interface TemplatePageFormProps {
  form: React.ReactNode;
}
export function TemplatePageForm({ form }: TemplatePageFormProps): JSX.Element {
  return (
    <div className="w-full">
      <div className="ml-[30px]">
        <Title1
          clasname="mb-[58px] text-star"
          titulo="Agrega un nuevo producto"
        />
        <Title2
          clasname="mt-[51.51px] mb-[12.67px]"
          titulo="Completa los siguientes datos para registrar un nuevo producto en tu inventario."
        />
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-background-two">
        <div className="flex flex-col m-[25px] p-[47px] rounded-xl bg-background-three">
          {form}
        </div>
      </div>
    </div>
  );
}

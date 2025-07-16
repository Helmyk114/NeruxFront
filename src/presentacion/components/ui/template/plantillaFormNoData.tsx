import { Title1, Title2 } from "../atomos";
import { ButtonAtom } from "../atomos/button/ButtonAtom";

interface TemplateFormNoDataProps {
  descripcion1?: string;
  descripcion2?: string;
  textButton: string;
  onClick?: () => void;
}

export function TemplateFormNoData({
  descripcion1,
  descripcion2,
  textButton,
  onClick,
}: TemplateFormNoDataProps): JSX.Element {
  return (
      <div className="flex flex-1 items-center justify-center w-full h-full">
        <div className="text-center">
          <Title1 titulo={descripcion1 || ""} />
          <Title2 titulo={descripcion2 || ""} />
          <ButtonAtom className="mt-4" texto={textButton} onClick={onClick} />
        </div>
      </div>
  );
}

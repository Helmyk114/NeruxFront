import type { ReactElement } from "react";
import {
  ButtonAtom,
  Title1,
  Title2,
} from "@/presentacion/components/ui/atomos";

interface TemplateFormNoDataProps {
  icon: ReactElement;
  descripcion1?: string;
  descripcion2?: string;
  textButton: string;
  onClick?: () => void;
}

export function TemplateFormNoData({
  icon,
  descripcion1,
  descripcion2,
  textButton,
  onClick,
}: TemplateFormNoDataProps): JSX.Element {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <div>{icon}</div>
      <div className="text-center">
        <Title1 titulo={descripcion1 || ""} />
        <Title2 titulo={descripcion2 || ""} />
      </div>
      <div>
        <ButtonAtom texto={textButton} onClick={onClick} />
      </div>
    </div>
  );
}

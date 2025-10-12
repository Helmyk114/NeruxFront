import { ReactElement } from "react";
import { Title1, Title2 } from "../atom/typography";
import { ButtonAtom } from "../atom/form/button";

interface NoDataTemplateProps {
  icon: ReactElement;
  descripcion1?: string;
  descripcion2?: string;
  textButton: string;
  onClick?: () => void;
}

export function NoDataTemplate({
  icon,
  descripcion1,
  descripcion2,
  textButton,
  onClick,
}: NoDataTemplateProps): JSX.Element {
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
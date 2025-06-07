import { useNavigate } from "react-router-dom";
import { ButtonAtom } from "./ButtonAtom";

interface ButtonBackProps {
  texto: string;
  className?: string;
}

export function BackButton({ texto, className }: ButtonBackProps): JSX.Element{
  const navigate = useNavigate();

  return (
    <ButtonAtom
      texto={texto}
      onClick={() => navigate(-1)}
      backgroundColor="bg-button-back"
      text="text-texts-sidebar text-md"
      type="button"
      className={className}
    />
  );
};


import { ModalTemplate } from "@/presentacion/components/ui";
import {
  ButtonAtom,
  RichText,
  Title1,
} from "@/presentacion/components/ui/atomos";

import { SemanticIcons } from "@/shared/constants/icons/semanticIcons";


interface DeleteConfirmPopUpProps {
  isOpen: boolean;
  onClose: () => void;
  titulo: string;
  startText: string;
  endText?: string;
  textButton: string;
  onClick: () => void;
  secondTextButton: string;
  onSecondClick: () => void;
}

export function DeleteConfirmPopUp({
  isOpen,
  onClose,
  titulo,
  startText,
  endText,
  textButton,
  onClick,
  secondTextButton,
  onSecondClick,
}: DeleteConfirmPopUpProps): JSX.Element {
  return (
    <ModalTemplate
      isOpen={isOpen}
      onClose={onClose} 

      header={
        <div className="flex flex-col items-center justify-center mt-[33px]">
          <SemanticIcons.warning className="text-semantic-advertencia" size={32} />
          <div className="mt-[19px]">
            <Title1 titulo={titulo} clasname="text-texts-negro" />
          </div>
        </div>
      }
      body={
        <div className=" items-center justify-center">
          <RichText
            segments={[
              {
                text: startText,
                className: "font-normal text-sm",
              },
              {
                text: endText,
                className: "italic text-sm",
              },
            ]}
            className={
              "font-OpenSans whitespace-pre-line text-center text-texts-bodyPopUp"
            }
          />
        </div>
      }
      footer={
        <div className="flex items-center gap-4 mt-[4px]">
          <ButtonAtom
            texto={textButton}
            className="bg-button-back text-typography-first font-semibold text-sm w-2/3"
            onClick={onClick}
          />
          <ButtonAtom
            texto={secondTextButton}
            className="bg-semantic-error text-typography-first font-semibold text-sm w-2/3"
            onClick={onSecondClick}
          />
        </div>
      }
    />
  );
}

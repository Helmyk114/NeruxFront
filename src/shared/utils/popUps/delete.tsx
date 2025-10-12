import { SemanticIcons } from "@/common/constant/icon";
import { ButtonAtom } from "@/presentation/components/ui/atom/form/button";
import { RichText, Title1 } from "@/presentation/components/ui/atom/typography";
import { ModalTemplate } from "@/presentation/components/ui/template";
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
      size="md"
      isDimissable
      hideCloseButton
      header={
        <div className="flex flex-col items-center justify-center mt-[33px]">
          <SemanticIcons.warning
            className="text-semantic-advertencia"
            size={60}
          />
          <div className="mt-[19px]">
            <Title1 titulo={titulo} />
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

import { ModalTemplate } from "@/presentacion/components/ui";
import { ButtonAtom, RichText, Title3 } from "@/presentacion/components/ui/atomos";
import { SemanticIcons } from "@/shared/constants/icons/semanticIcons";

interface PopUpSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  titulo: string;
  startText: string;
  endText?: string;
  textButton: string;
  onClick: () => void;
  secondTextButton?: string;
  onSecondClick?: () => void;
}

export const PopUpSuccess: React.FC<PopUpSuccessProps> = ({
  isOpen,
  onClose,
  titulo,
  startText,
  endText,
  textButton,
  onClick,
  secondTextButton,
  onSecondClick,
}) => {
  return (
    <ModalTemplate
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      hideCloseButton
      header={
        <div className="flex flex-col items-center justify-center">
          <SemanticIcons.sucess className="text-semantic-exito" size={60}/>
          <div className="mt-[19px]">
            <Title3 titulo={titulo}/>
          </div>
        </div>
      }
      body={
        <div className="flex flex-col items-center justify-center">
          <RichText
            segments={[
              {
                text: startText,
                className: "font-normal text-sm",
              },
              {
                text: endText,
                className: "font-semibold text-sm",
              },
            ]}
            className={
              "font-OpenSans whitespace-pre-line text-center text-texts-bodyPopUp"
            }
          />
        </div>
      }
      footer={
        secondTextButton && onSecondClick ? (
          <div className="flex flex-col items-center gap-4 mb-[33px] mt-[4px]">
            <ButtonAtom
              texto={textButton}
              className="text-typography-first font-semibold text-sm w-2/3 h-[52px]"
              onClick={onClick}
            />
            <ButtonAtom
              texto={secondTextButton}
              className="text-typography-first font-semibold text-sm w-2/3 h-[52px]"
              onClick={onSecondClick}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full m-auto">
            <ButtonAtom
              texto={textButton}
              className="text-typography-first font-semibold text-sm w-2/3"
              onClick={onClick}
            />
          </div>
        )
      }
    />
  );
};

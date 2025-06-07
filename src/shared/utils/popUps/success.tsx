import ModalTemplate from "../../../presentacion/components/ui/template/modal/popUps/notificacion";
import { Title1 } from "../../../presentacion/components/ui/atomos/textos/titles/level1";
import { TextoInicio } from "../../../presentacion/components/ui/atomos";
import { IconCircleCheck } from "@tabler/icons-react";
import { ButtonAtom } from "../../../presentacion/components/ui/atomos/button/ButtonAtom";

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

const PopUpSuccess: React.FC<PopUpSuccessProps> = ({
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
      hideCloseButton={true}
      header={
        <div className="flex flex-col items-center justify-center mt-[33px]">
          <IconCircleCheck className="text-semantic-exito" size={130} />
          <div className="mt-[19px]">
            <Title1 titulo={titulo} clasname="text-texts-negro" />
          </div>
        </div>
      }
      body={
        <div className="flex flex-col items-center justify-center">
          <TextoInicio
            spans={[
              {
                texto: startText,
                className: "font-normal text-base",
              },
              {
                texto: endText,
                className: "font-semibold text-base",
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
              className="text-texts-active font-semibold text-lg w-2/3 h-[52px]"
              onClick={onClick}
            />
            <ButtonAtom
              texto={secondTextButton}
              className="text-texts-active font-semibold text-lg w-2/3 h-[52px]"
              onClick={onSecondClick}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full m-auto">
            <ButtonAtom
              texto={textButton}
              className="text-texts-active font-semibold text-lg mb-[33px] mt-[4px] w-2/3 h-[52px]"
              onClick={onClick}
            />
          </div>
        )
      }
    />
  );
};

export default PopUpSuccess;

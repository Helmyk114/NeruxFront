import { useFormikContext } from "formik";
import ButtonAtom from "./ButtonAtom";

interface ButtonCancelProps {
  onClose: () => void;
  className?: string;
}

export function ButtonCancel({
  onClose,
  className,
}: ButtonCancelProps): JSX.Element {
  const { resetForm } = useFormikContext();

  return (
    <ButtonAtom
      texto="Cancelar"
      onClick={() => {
        resetForm();
        onClose();
      }}
      backgroundColor="bg"
      text="white text-md"
      type="button"
      className={className}
    />
  );
}

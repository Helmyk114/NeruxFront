import { ItemsByPage, TotalItems } from "../../atomos";
import ButtonAtom from "../../atomos/button/ButtonAtom";

interface TopContentPorps {
  onclick?: () => void;
  totalItems: number;
  texto: string;
  nameButton: string;
  handleRowsPerPageChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export function TopContent({
  onclick,
  totalItems,
  texto,
  nameButton,
  handleRowsPerPageChange,
}: TopContentPorps): JSX.Element {
  return (
    <>
      <div className="flex justify-end">
        <ButtonAtom
          className="w-40 "
          texto={nameButton}
          onClick={onclick}
        />
      </div>
      <div className="flex justify-between w-full">
        <TotalItems valor={totalItems} texto={texto} />
        <ItemsByPage
          tabla={texto}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </>
  );
}

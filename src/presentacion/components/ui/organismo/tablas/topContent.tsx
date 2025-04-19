import { ItemsByPage, TotalItems } from "../../atomos";
import ButtonAtom from "../../atomos/ButtonAtom";

interface TopContentPorps {
  totalItems: number;
  texto: string;
  handleRowsPerPageChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export function TopContent({
  totalItems,
  texto,
  handleRowsPerPageChange,
}: TopContentPorps): JSX.Element {
  return (
    <>
    <div className="flex justify-end">
      <ButtonAtom texto='hola' className="w-40 " text="Agregar nuevo +"  />
      </div>
      <div className="flex justify-between w-full">
        <TotalItems valor={totalItems} texto={texto} />
        <ItemsByPage onRowsPerPageChange={handleRowsPerPageChange} />
      </div>

    </>
  );
}

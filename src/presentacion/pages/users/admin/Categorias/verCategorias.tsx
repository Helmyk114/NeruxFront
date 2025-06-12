import { Spinner } from "@heroui/react";
import { Category } from "../../../../../domain/entities/category";
import { categoriasUseCase } from "../../../../../domain/usecases/inventario/categoria/categoria.useCase";
import { useItemFetch } from "../../../../components/hook/api/useItemFetch";
import { DrawerWrapper } from "../../../../components/ui/organismo/forms/Drawer";
import { ButtonAtom, Title2 } from "../../../../components/ui/atomos";
import { Title3 } from "../../../../components/ui/atomos/textos/titles/level3";

interface VerCategorias {
  isOpen: boolean;
  onClose: () => void;
  id: string | number | null;
  setMode: (mode: "ver" | "editar" | "crear") => void;
  onOpen: () => void;
}

export function VerCategorias({
  isOpen,
  onClose,
  id,
  setMode,
  onOpen,
}: VerCategorias): JSX.Element {
  const { data: category, loading, error } = useItemFetch<Category>(
    async (id) => {
      const data = await categoriasUseCase.getById("/category", id);
      return { data };
    },
    {
      byId: id,
      enable: !!id,
      reload: isOpen,
    }
  );

  const handleEditClick = () => {
    setMode("editar");
    onOpen();
  };

  return (
    <DrawerWrapper
      isOpen={isOpen}
      onClose={onClose}
      isDimissable={true}
      header={<Title3 classname="mt-6" titulo="Ver categoría" />}
      body={
        loading ? (
          <div><Spinner title="Loading..."/></div>
        ) : error ? (
          <div>Error: {"No se encontró la categoria"}</div>
        ) : (
        <>
          <div className="-mb-3">Categoría</div>
          <Title2 titulo={category?.name}/>
          <div className="-mb-3">Descipción</div>
          <Title2 titulo={category?.description}/>
          <div>📦 Productos asociados: {<Title2 titulo={category?.product_count}/>}</div>
          
          <div className="-mb-3">🗓️ Creado el:</div>
          <Title2 clasname="ml-5" titulo={category?.create_at}/>
          <div className="-mb-3 -mt-3">✏️ Ultima actualización:</div>
          <Title2 clasname="ml-5" titulo={category?.update_at}/>
        </>
        )
      }
      footer={<ButtonAtom className="mt-4" texto="Editar categoría" onClick={handleEditClick}/>}
      />
  );
  
}

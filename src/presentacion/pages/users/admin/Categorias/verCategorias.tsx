import { Spinner } from "@heroui/react";
import { Category } from "../../../../../domain/entities/category";
import { categoriasUseCase } from "../../../../../domain/usecases/inventario/categoria/categoria.useCase";
import { useItemFetch } from "../../../../components/hook/api/useItemFetch";
import { DrawerWrapper } from "../../../../components/ui/organismo/forms/Drawer";

interface VerCategorias {
  isOpen: boolean;
  onClose: () => void;
  id: string | number | null;
}

export function VerCategorias({
  isOpen,
  onClose,
  id,
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

  return (
    <DrawerWrapper
      isOpen={isOpen}
      onClose={onClose}
      isDimissable={true}
      header={<div className="capitalize">{category?.name}</div>}
      body={
        loading ? (
          <div><Spinner title="Loading..."/></div>
        ) : error ? (
          <div>Error: {"No se encontró la categoria"}</div>
        ) : (
        <>
          <div>Descipción: {category?.description}</div>
          <div>Productos asociado: {category?.product_count}</div>
          <div>Creado el: {category?.create_at}</div>
          <div>Ultima actualización: {category?.update_at}</div>
        </>
        )
      }
      footer={""}
    />
  );
}

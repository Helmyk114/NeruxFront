import { Spinner } from "@heroui/react";
import { Category } from "../../../../../../domain/inventario/categoria/category.entity";
import { categoriasUseCase } from "../../../../../../domain/inventario/categoria/categoria.useCase";
import { useItemFetch } from "../../../../../components/hook/api/useItemFetch";
import { DrawerWrapper } from "../../../../../components/ui/organismo/forms/Drawer";
import { ButtonAtom, Title3 } from "../../../../../components/ui/atomos";

import { Section } from "@/presentacion/components/ui";
import { formatDate } from "@/shared";

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
  const {
    data: category,
    loading,
    error,
  } = useItemFetch<Category>(
    async (id) => {
      const data = await categoriasUseCase.getById("/category/detail", id);
      return { data };
    },
    {
      byId: id,
      enable: Boolean(id),
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
      isDimissable
      header={<Title3 classname="mt-6" titulo="Información de la categoría" />}
      body={
        loading ? (
          <div>
            <Spinner title="Cargando..." />
          </div>
        ) : error ? (
          <div>Error: {"No se encontró la categoria"}</div>
        ) : (
          <Section
            border
            info={[
              { subtitulo: "Nombre", valor: category?.name },
              { subtitulo: "Descripción", valor: category?.description },
              {
                subtitulo: "Productos asociados",
                valor: `${category?.product_count} ${
                  category?.product_count === 1 ? "producto" : "productos"
                }`,
              },
              { subtitulo: "🗓️ Creada el:", valor: formatDate(category?.created_at) },
              {
                subtitulo: "✏️ Ultima actualización:",
                valor: formatDate(category?.updated_at),
              },
              {
                subtitulo: "🔄 Último movimiento:",
                valor: `Entrada: ${"-"} - el ${"-"}`,
              },
            ]}
          />
        )
      }
      footer={
        <ButtonAtom
          className="mt-4"
          texto="Editar categoría"
          onClick={handleEditClick}
        />
      }
    />
  );
}

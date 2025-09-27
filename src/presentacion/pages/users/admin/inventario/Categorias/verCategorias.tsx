import { Spinner } from "@heroui/react";
import {
  DrawerWrapper,
  ButtonAtom,
  Title3,
  Section,
} from "@/presentacion/components/ui";
import { useCategoriaById } from "@/presentacion/components/hook";

interface VerCategorias {
  isOpen: boolean;
  onClose: () => void;
  id: string | null;
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
  } = useCategoriaById(id, Boolean(id), isOpen);

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
                valor: `${category?.productCount} ${
                  category?.productCount === 1 ? "producto" : "productos"
                }`,
              },
              { subtitulo: "🗓️ Creada el:", valor: category?.createAt },
              {
                subtitulo: "✏️ Ultima actualización:",
                valor: category?.updateAt,
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

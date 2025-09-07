import { Proveedor, proveedoresUseCase } from "@/domain";
import { useItemFetch } from "@/presentacion/components/hook";
import {
  ButtonAtom,
  DrawerWrapper,
  Section,
  Title3,
} from "@/presentacion/components/ui";
import { Spinner } from "@heroui/react";

interface VerProveedorProps {
  isOpen: boolean;
  onClose: () => void;
  id: string | number | null;
  setMode: (mode: "ver" | "editar" | "crear") => void;
  onOpen: () => void;
}

export function VerProveedores({
  isOpen,
  onClose,
  id,
  setMode,
  onOpen,
}: VerProveedorProps): JSX.Element {
  const {
    data: proveedor,
    loading,
    error,
  } = useItemFetch<Proveedor>(
    async (id) => {
      const data = await proveedoresUseCase.getById("/supplier/dateil", id);
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
      header={<Title3 classname="mt-6" titulo="Información del proveedor" />}
      body={
        loading ? (
          <div>
            <Spinner title="Loading..." />
          </div>
        ) : error ? (
          <div>Error: {"No se encontró el proveedor"}</div>
        ) : (
          <Section
            border
            info={[
              { subtitulo: "Nombre", valor: proveedor?.name || "-" },
              { subtitulo: "Empresa", valor: proveedor?.supplier || "-" },
              { subtitulo: "Correo", valor: proveedor?.email || "-" },
              { subtitulo: "Teléfono", valor: proveedor?.phone || "-" },
              { subtitulo: "🗓️ Creado el:", valor: proveedor?.create_at },
              {
                subtitulo: "✏️ Ultima actualización:",
                valor: proveedor?.update_at,
              },
              { subtitulo: "🔄 Última interacción registrada:", valor: `Producto: ${"-"} \nEntrada: ${"-"} unidades - el ${"-"}`},
            ]}
          />
        )
      }
      footer={
        <ButtonAtom
          className="mt-4"
          texto="Editar proveedor"
          onClick={handleEditClick}
        />
      }
    />
  );
}

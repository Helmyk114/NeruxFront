
import { useProveedorById } from "@/application/Hooks";
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
  id: string | null;
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
  } = useProveedorById(id, Boolean(id), isOpen);

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
              { subtitulo: "🗓️ Creado el:", valor: proveedor?.createAt },
              {
                subtitulo: "✏️ Ultima actualización:",
                valor: proveedor?.updateAt,
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

import { useProductoById } from "@/app/hook";
import { ButtonAtom } from "@/presentation/components/ui/atom/form/button";
import { Title3 } from "@/presentation/components/ui/atom/typography";
import { Section } from "@/presentation/components/ui/molecule/layout";
import { DrawerTemplate } from "@/presentation/components/ui/template";
import { Spinner } from "@heroui/react";

interface VerProducto {
  isOpen: boolean;
  onClose: () => void;
  id: string | null;
  setMode: (mode: "ver" | "editar" | "crear") => void;
  onOpen: () => void;
}

export function VerProducto({
  isOpen,
  onClose,
  id,
  setMode,
  onOpen,
}: VerProducto): JSX.Element {
  const {
    data: producto,
    loading,
    error,
  } = useProductoById(id, Boolean(id), isOpen);

  const handleEditClick = () => {
    setMode("editar");
    onOpen();
  };

  return (
    <DrawerTemplate
      isOpen={isOpen}
      onClose={onClose}
      isDimissable
      header={<Title3 classname="mt-6" titulo="Información del producto" />}
      body={
        loading ? (
          <div>
            <Spinner title="Cargando..." />
          </div>
        ) : error ? (
          <div>Error: {"No se encontró el producto"}</div>
        ) : (
          <>
            <Section
              border
              title="🧾 Información general"
              info={[
                { subtitulo: "Nombre", valor: `${producto?.name}` },
                { subtitulo: "SKU", valor: `${producto?.sku}` },
                { subtitulo: "Categoría", valor: `${producto?.categoria}` },
                { subtitulo: "Proveedor", valor: `${producto?.proveedor}` },
              ]}
            />

            <Section
              title="💲 Precios"
              info={[
                { subtitulo: "Precio de proveedor", valor: `$ ${"0"}` },
                {
                  subtitulo: "Precio de venta",
                  valor: `$ ${producto?.salePrice}`,
                },
              ]}
            />

            <Section
              title="📦 Inventario"
              info={[
                { subtitulo: "Stock disponible", valor: `${"-"}` },
                { subtitulo: "Estado", valor: `${producto?.state}` },
                {
                  subtitulo: `Alerta de stock mínimo: ${
                    producto?.alerta ? "Activo" : "Inactivo"
                  }`,
                  valor: `Stock mínimo: ${producto?.minStock} ${
                    producto?.minStock === 1 ? "Unidad" : "Unidades"
                  }`,
                },
              ]}
            />

            <Section
              title="📊 Historial de movimientos"
              info={[
                {
                  subtitulo: "Fecha de creación:",
                  valor: `${producto?.createAt}`,
                },
                {
                  subtitulo: "Última actualización:",
                  valor: `${producto?.updateAt}`,
                },
                {
                  subtitulo: "Última entrada registrada:",
                  valor: `${"-"} | ${"-"} | ${"-"}`,
                },
              ]}
            />

            <Section
              title="📝 Descripción"
              info={[{ valor: producto?.description || "Sin descripción" }]}
            />
          </>
        )
      }
      footer={
        <ButtonAtom
          className="mt-4"
          texto="Editar producto"
          onClick={handleEditClick}
        />
      }
    />
  );
}

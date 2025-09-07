import { adapterProducto } from "@/adapter/inventario/producto.adapter";
import { ProductoUi } from "@/adapter/inventario/productoUi";
import { productUseCase } from "@/domain";
import { useItemFetch } from "@/presentacion/components/hook";
import {
  ButtonAtom,
  DrawerWrapper,
  Section,
  Title3,
} from "@/presentacion/components/ui";
import { Spinner } from "@heroui/react";

interface VerProducto {
  isOpen: boolean;
  onClose: () => void;
  id: string | number | null;
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
  } = useItemFetch<ProductoUi>(
    async (id) => {
      const data = await productUseCase.detail("/product/detail", id);
      return { data: adapterProducto.sidemodal(data) };
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
                { subtitulo: "Categoría", valor: `${producto?.category.name}` },
                { subtitulo: "Proveedor", valor: `${producto?.supplier.name}` },
              ]}
            />

            <Section
              title="💲 Precios"
              info={[
                { subtitulo: "Precio de proveedor", valor: `$ ${"0"}` },
                { subtitulo: "Precio de venta", valor: `$ ${producto?.salePrice}` },
              ]}
            />

            <Section
              title="📦 Inventario"
              info={[
                { subtitulo: "Stock disponible", valor: `${"-"}` },
                { subtitulo: "Estado", valor: `${producto?.state.name}` },
                {
                  subtitulo: `Alerta de stock mínimo: ${
                    producto?.alert ? "Activo" : "Inactivo"
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
                { subtitulo: "Fecha de creación:", valor: `${producto?.create_at}`},
                { subtitulo: "Última actualización:", valor: `${producto?.update_at}` },
                { subtitulo: "Última entrada registrada:", valor: `${"-"} | ${"-"} | ${"-"}` },
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

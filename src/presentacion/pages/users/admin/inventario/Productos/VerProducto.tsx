import { adapterProducto } from "@/adapter/inventario/producto.adapter";
import { ProductoUi } from "@/adapter/inventario/productoUi";
import { productUseCase } from "@/domain";
import { useItemFetch } from "@/presentacion/components/hook";
import {
  ButtonAtom,
  DrawerWrapper,
  Title2,
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
      const data = await productUseCase.getById("/product", id);
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
            <div className="flex flex-col gap-2">
              <div className="font-bold mt-1">📦 Información general</div>
              <div>
                <div className="text-typography-thrith ml-5">Nombre</div>
                <Title2 clasname={"ml-5"} titulo={producto?.name} />
              </div>
              <div>
                <div className="text-typography-thrith ml-5">Categoría</div>
                <Title2 clasname={"ml-5"} titulo={producto?.category} />
              </div>
              <div>
                <div className="text-typography-thrith ml-5">Proveedor</div>
                <Title2 clasname={"ml-5"} titulo={producto?.supplier} />
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t-[2px] border-base-fourth">
              <div className="font-bold mt-3">💰 Precios</div>
              <div>
                <div className="text-typography-thrith ml-5">
                  Precio de venta
                </div>
                <Title2 clasname="ml-5" titulo={`$ ${producto?.salePrice}`} />
              </div>

              <div>
                <div className="text-typography-thrith ml-5">
                  Precio de proveedor
                </div>
                <Title2
                  clasname="ml-5"
                  titulo={`$ ${producto?.supplierPrice}`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t-[2px] border-base-fourth">
              <div className="font-bold mt-3">📊 Inventario</div>
              <div>
                <div className="text-typography-thrith ml-5">
                  Stock disponible
                </div>
                <Title2
                  clasname="ml-5 text-typography-thrith ml-5"
                  titulo={`${producto?.stock} ${producto?.unit}`}
                />
              </div>
              <div>
                <div className="text-typography-thrith ml-5">
                  Alerta de stock mínimo
                </div>
                <Title2
                  clasname="ml-5"
                  titulo={`${
                    producto?.alert ? "Activo" : "Inactivo"
                  } - Stock mínimo: ${producto?.minStock} ${
                    producto?.minStock === 1 ? "Unidad" : "Unidades"
                  }`}
                />
              </div>
            </div>

            <div className="border-t-[2px] border-base-fourth">
              <div className="text-typography-thrith mt-3">
                🕒 Última modificación:
              </div>
              <Title2 clasname="ml-5" titulo={producto?.update_at} />
            </div>
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

import { useItem } from "@/presentacion/components/hook";
import { GetByIdProveedorUseCase } from "@/dependencies/inventario/proveedor";
import { ProveedorDetailUi } from "@/presentacion/models";

export function useProveedorById(
  id: string | null,
  enable: boolean,
  reload: boolean
) {
  return useItem<ProveedorDetailUi>(GetByIdProveedorUseCase, {
    id: id ?? "",
    enable,
    reload,
  });
}

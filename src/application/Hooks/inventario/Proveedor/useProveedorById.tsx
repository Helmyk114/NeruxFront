import { useItem } from "@/presentacion/components/hook";
import { GetByIdProveedorUseCase } from "@/dependencies/inverntario/proveedor";
import { ProveedorDetailUi } from "@/presentacion/Models/Inventario/ProveedorModels";

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

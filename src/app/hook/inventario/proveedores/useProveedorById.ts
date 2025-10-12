import { GetByIdProveedorUseCase } from "@/dependencies";
import { Proveedor } from "@/dominio";
import { useItem } from "@/presentation/components/hook";
import { ProveedorDetailUi } from "@/presentation/models";

export function useProveedorById(
  id: Proveedor["id"] | null,
  enable: boolean,
  reload: boolean
) {
  return useItem<ProveedorDetailUi>(GetByIdProveedorUseCase, {
    id: id ?? "",
    enable,
    reload,
  });
}

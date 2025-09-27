import { Proveedor } from "@/domain/interface";
import { useItem } from "../../api/useItem";
import { GetByIdProveedorUseCase } from "@/Dependencies/inverntario/proveedor";

export function useProveedorById(
  id: string | null,
  enable: boolean,
  reload: boolean
) {
  return useItem<Proveedor>(GetByIdProveedorUseCase, {
    id: id ?? "",
    enable,
    reload,
  });
}

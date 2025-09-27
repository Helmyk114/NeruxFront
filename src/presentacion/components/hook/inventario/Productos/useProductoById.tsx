import { Producto } from "@/domain/interface";
import { useItem } from "../../api/useItem";
import { GetByIdProductoUseCase } from "@/Dependencies/inverntario/producto";


export function useProductoById(
  id: string | null,
  enable: boolean,
  reload?: boolean
) {
  return useItem<Producto>(GetByIdProductoUseCase, {
    id: id ?? "",
    enable,
    reload: reload ?? false,
  })
}
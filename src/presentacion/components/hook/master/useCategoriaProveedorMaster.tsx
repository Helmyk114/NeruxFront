import { Master } from "@/domain/interface";
import { useAll } from "../api/useAll";
import {
  GetAllCategoriasUseCase,
  GetAllProveedorUseCase,
} from "@/Dependencies/master/master";

export function useCategoriaProveedorMaster(enable: boolean, reload?: boolean) {
  const {
    data: categorias,
    loading: categoriasLoading,
    error: categoriasError,
  } = useAll<Master>(GetAllCategoriasUseCase, { enable, reload });
  
  const {
    data: proveedores,
    loading: proveedoresLoading,
    error: proveedoresError,
  } = useAll<Master>(GetAllProveedorUseCase, { enable, reload });

  return {
    categorias,
    proveedores,
    loading: categoriasLoading || proveedoresLoading,
    error: categoriasError || proveedoresError,
  };
}

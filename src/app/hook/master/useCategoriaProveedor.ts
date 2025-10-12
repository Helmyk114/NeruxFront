import { GetAllCategoriasUseCase, GetAllProveedorUseCase } from "@/dependencies/master/master";
import { Master } from "@/dominio";
import { useAll } from "@/presentation/components/hook";

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
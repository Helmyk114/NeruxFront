
import { CreateCategoria, DeleteCategoria, GetAllPaginateCategoria, GetByIdCategoria, UpdateCategoria } from "@/application/Inventario/categoria";
import { CategoriaApiRepository } from "@/infrastructure/api/inventario/CategoriaApi";

export const CreateCategoriaUseCase = CreateCategoria(CategoriaApiRepository);
export const UpdateCategoriaUseCase = UpdateCategoria(CategoriaApiRepository);
export const DeleteCategoriaUseCase = DeleteCategoria(CategoriaApiRepository);
// export const GetAllCategoriaUseCase = GetAllCategoria(CategoriaApiRepository)
export const GetAllPaginateCategoriaUseCase = GetAllPaginateCategoria(CategoriaApiRepository);
export const GetByIdCategoriaUseCase = GetByIdCategoria(CategoriaApiRepository);

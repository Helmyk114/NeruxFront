import { ProveedorRepository } from "@/domain/repository";
import { DeleteProveedorCommand } from "@/presentacion/Models/inventario/ProveedorModels";

export function DeleteProveedor(proveedorRepository: ProveedorRepository) {
  return async (deleteProveedorCommand: DeleteProveedorCommand) => {
    const { id } = deleteProveedorCommand;

    await proveedorRepository.delete(id);
  };
}

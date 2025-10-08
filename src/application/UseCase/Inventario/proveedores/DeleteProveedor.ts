import { ProveedorRepository } from "@/domain/repository";
import { DeleteProveedorCommand } from "@/presentacion/models/inventario/ProveedorModels";

export function DeleteProveedor(proveedorRepository: ProveedorRepository) {
  return async (deleteProveedorCommand: DeleteProveedorCommand) => {
    const { id } = deleteProveedorCommand;

    await proveedorRepository.delete(id);
  };
}

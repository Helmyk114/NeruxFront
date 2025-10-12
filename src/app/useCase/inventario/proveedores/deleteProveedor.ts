import { ProveedorRepository } from "@/app/repository";
import { DeleteProveedorCommand } from "@/presentation/models";

export function DeleteProveedor(proveedorRepository: ProveedorRepository) {
  return async (deleteProveedorCommand: DeleteProveedorCommand) => {
    const { id } = deleteProveedorCommand;

    await proveedorRepository.delete(id);
  };
}

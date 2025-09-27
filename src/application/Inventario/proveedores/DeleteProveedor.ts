import { ProveedorRepository } from "@/domain/repository";

export type DeleteProveedorCommand = {
  id: string;
};

export function DeleteProveedor(proveedorRepository: ProveedorRepository) {
  return async (deleteProveedorCommand: DeleteProveedorCommand) => {
    const { id } = deleteProveedorCommand;

    await proveedorRepository.delete(id);
  };
}
import { ProveedorRepository } from "@/domain/repository";
import { UpdateProveedorCommand } from "@/presentacion/Models";

export function UpdateProveedor(proveedorRepository: ProveedorRepository) {
  return async (updateProveedorCommand: UpdateProveedorCommand) => {
    const { id, name, supplier, phone, email, note } = updateProveedorCommand;

    const proveedor = {
      id,
      name,
      supplier,
      phone,
      email,
      note,
    };
    await proveedorRepository.update(proveedor);
  };
}

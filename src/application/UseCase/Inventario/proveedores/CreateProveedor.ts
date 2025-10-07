import { ProveedorRepository } from "@/domain/repository";
import { CreateProveedorCommand } from "@/presentacion/Models/inventario/ProveedorModels";

export function CreateProveedor(proveedorRepository: ProveedorRepository) {
  return async (createProveedorCommand: CreateProveedorCommand) => {
    const { name, supplier, phone, email, note } = createProveedorCommand;

    const proveedor = {
      name,
      supplier,
      phone,
      email,
      note,
    };
    await proveedorRepository.create(proveedor);
  };
}

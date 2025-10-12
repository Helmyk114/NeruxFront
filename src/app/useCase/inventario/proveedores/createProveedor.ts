import { ProveedorRepository } from "@/app/repository";
import { CreateProveedorCommand } from "@/presentation/models";

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

import { Proveedor } from "@/domain/interface";
import { ProveedorRepository } from "@/domain/repository";

export type CreateProveedorCommand = {
  name: string;
  supplier: string;
  phone: string;
  email: string;
  note: string;
};

export function CreateProveedor(proveedorRepository: ProveedorRepository) {
  return async (createProveedorCommand: CreateProveedorCommand) => {
    const { name, supplier, phone, email, note } = createProveedorCommand;

    const proveedor: Proveedor = {
      name,
      supplier,
      phone,
      email,
      note,
    };
    await proveedorRepository.create(proveedor);
  };
}

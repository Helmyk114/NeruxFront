import { ProveedorRepository } from "@/domain/repository";

export type UpdateProveedorCommand = {
  id: string;
  name: string;
  supplier: string;
  phone: string;
  email: string;
  note: string;
};

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
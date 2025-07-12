export interface Proveedor {
  id: number | string;
  name: string;
  supplier: string;
  email: string;
  phone: string;
  note: string;
  create_at: string;
  update_at: string;
  business_id: string;
}

export type ProveedorForm = Omit<
  Proveedor,
  "id" | "business_id" | "create_at" | "update_at"
> 
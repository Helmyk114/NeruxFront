export type Proveedor = {
  id: string;
  name: string;
  supplier: string;
  email: string;
  phone: string;
  note: string;
}

export type ProveedorPaginate = Omit<Proveedor, "note"> & {
  isDefault: boolean;
};

export type ProveedorDetail = Proveedor & {
  create_at: string;
  update_at: string;
  isDefault: boolean;
};
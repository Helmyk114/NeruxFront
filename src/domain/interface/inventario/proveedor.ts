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
  createAt: string;
  updateAt: string;
  isDefault: boolean;
};
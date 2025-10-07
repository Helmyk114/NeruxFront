export type ProveedorPaginateApi = {
  id: string;
  name: string;
  supplier: string;
  phone: string;
  email: string;
  is_default: boolean;
};

export type ProveedorDetailApi = {
  id: string;
  name: string;
  supplier: string;
  email: string;
  phone: string;
  note: string;
  created_at: string;
  updated_at: string;
  is_default: boolean;
};
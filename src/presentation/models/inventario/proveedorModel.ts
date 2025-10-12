
export type ProveedorPaginateUi = {
  id: string;
  name: string;
  supplier: string;
  email: string;
  phone: string;
  isDefault: boolean;
};

export type ProveedorDetailUi = {
  id: string;
  name: string;
  supplier: string;
  email: string;
  phone: string;
  note: string;
  createAt: string;
  updateAt: string;
  isDefault: boolean;
};

export type CreateProveedorCommand = {
  name: string;
  supplier: string;
  email: string;
  phone: string;
  note?: string;
};

export type UpdateProveedorCommand = {
  id: string;
  name: string;
  supplier: string;
  email: string;
  phone: string;
  note?: string;
};

export type DeleteProveedorCommand = {
  id: string;
};
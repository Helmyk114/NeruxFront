export type Business = {
  id: string;
  name: string;
  nit: string;
  email: string;
  phone: string;
  address: string;
  state: string;
};

export type BusinessPaginate = Omit<Business, "nit" | "address"> & {
  admin: string;
};

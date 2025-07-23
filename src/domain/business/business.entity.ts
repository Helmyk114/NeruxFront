export interface Business {
  id: string;
  name: string;
  nit: string;
  email: string;
  phone: string;
  address: string;
  photo?: string | null;
  create_at: string;
  state_id: number;
}

export type BusinessForm = Omit<
  Business,
  "idBusiness" | "create_at" | "state_id" | "id"
>;



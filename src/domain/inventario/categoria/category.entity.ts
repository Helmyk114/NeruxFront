export interface Category {
  id: number | string;
  name: string;
  description: string;
  product_count: number;
  created_at: string;
  updated_at: string;
  business_id: string;
}

export type CategoryForm = Omit<
  Category,
  "id" | "product_count" | "create_at" | "update_at" | "business_id"
>;

export interface CategoryE {
  id: number | string;
  name: string;
  description: string;
  product_count: number;
  created_at: string;
  updated_at: string;
  business_id: string;
}

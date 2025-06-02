export interface Category {
  id: number;
  name: string;
  description: string;
  product_count: number;
  created_at: string;
  updated_at: string;
  business_id: string;
}

export type CategoryForm = Omit<
  Category,
  "id" | "product_count" | "created_at" | "updated_at" | "business_id"
>;

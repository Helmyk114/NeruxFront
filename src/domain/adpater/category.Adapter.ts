import { Category } from "../entities/category";

export interface RawCategoryResponse {
  status: string;
  message: string;
  data: {
    id: number;
    name: string;
    description: string;
    product_count: number;
    create_at: string;
    update_at: string;
    business_id: string;
  };
}

export function categoryAdapter(response: RawCategoryResponse): Category {
  const { data } = response;

  return {
    id: data.id,
    name: data.name,
    description: data.description,
    product_count: data.product_count,
    create_at: data.create_at,
    update_at: data.update_at,
    business_id: data.business_id,
  };
}

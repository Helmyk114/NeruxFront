import { useState } from "react";

interface UpdateItemResponse<T> {
  data: T;
}

type UpdateFunction<T, U> = (
  id: string | number,
  payload: U
) => Promise<UpdateItemResponse<T>>;

export function useItemUpdate<T, U>(
  updateFn: UpdateFunction<T, U>
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const updateItem = async (id: string | number, payload: U) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await updateFn(id, payload);
      setData(response.data);
      setSuccess(true);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, success, updateItem };
}

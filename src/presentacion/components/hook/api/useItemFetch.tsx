import { useEffect, useState } from "react";

interface SingleItemResponse<T> {
  data: T;
}

interface UseFetchByIdOptions {
  byId: string | number | null;
  reload?: boolean;
  enable?: boolean;
}

type FetchByIdFunction<T> = (
  id: string | number
) => Promise<SingleItemResponse<T>>;

export function useItemFetch<T>(
  fetchFn: FetchByIdFunction<T>,
  options: UseFetchByIdOptions
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!options.enable || options.byId === null || options.byId === undefined) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchFn(options.byId!);
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [options.byId, options.reload, options.enable]);

  return { data, loading, error };
}

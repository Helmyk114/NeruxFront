import { useEffect, useState } from "react";

interface UseFetchAllOptions {
  reload?: boolean;
  enable?: boolean; 
}

type FetchAllFunction<T> = () => Promise<T[]>;

export function useFetchAll<T>(
  fetchFn: FetchAllFunction<T>,
  options: UseFetchAllOptions
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!options.enable) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchFn();
        setData(response);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [options.reload, options.enable]);

  return { data, loading, error };
}

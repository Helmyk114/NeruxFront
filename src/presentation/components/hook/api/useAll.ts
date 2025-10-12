import { ResponseApi } from "@/common/types";
import { useEffect, useState } from "react";

export function useAll<T>(
  action: () => Promise<ResponseApi<T[]>>,
  { enable = true, reload = false }: { enable?: boolean; reload?: boolean }
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enable) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await action();
        setData(res.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [action, reload, enable]);

  return { data, loading, error };
}

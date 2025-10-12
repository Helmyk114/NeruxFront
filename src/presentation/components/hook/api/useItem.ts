import { ResponseApi } from "@/common/types";
import { useEffect, useState } from "react";

export function useItem<T>(
  action: (id: string | null) => Promise<ResponseApi<T>>,
  {
    id,
    enable = true,
    reload = false,
  }: { id: string; enable: boolean; reload: boolean }
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enable || id === null || id === undefined) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await action(id);
        setData(res.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [action, id, reload, enable]);

  return { data, loading, error };
}

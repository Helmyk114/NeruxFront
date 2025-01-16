import { useEffect, useState } from "react";
import { apiClient } from "../../../infrastructure";

export function UsefecthGet<T>(endoPoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        setError(null);
      try {
        const respuesta = await apiClient.get<T>(endoPoint);
        setData(respuesta);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endoPoint]);
  return { data, loading, error };
};

import { useEffect, useState } from "react";
import { apiClient } from "../../../infrastructure";

interface PaginationMetadata {
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

interface PaginatedResponse<T> {
  data: T[];
  metadata: PaginationMetadata;
}

export function UsefecthGetPaginatio<T>(endoPoint: string, currentPage: number, pageSize: number) {
  const [data, setData] = useState<T[] | null>(null);
  const [metadata, setMetadata] = useState<PaginationMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const respuesta = await apiClient.get<
          PaginatedResponse<T>,
          { page: number; limit: number }
        >(endoPoint, {
          page: currentPage,
          limit: pageSize,
        });
        setData(respuesta.data);
        setMetadata(respuesta.metadata);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endoPoint, currentPage, pageSize]);
  
  return {
    data: data || [],
    metadata: metadata || {
      totalItems: 0,
      totalPages: 0,
      currentPage: 0,
    },
    loading,
    error,
  };
}

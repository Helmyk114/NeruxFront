import { useEffect, useState } from "react";
import { PaginatedResponse, PaginationMetadata } from "@/shared/types/ResponsePaginada";

interface UseFetchPaginatedOptions {
  currentPage?: number;
  pageSize?: number;
  reload?: boolean;
  enable?: boolean;
}

type FetchPaginatedFunction<T> = (
  options: UseFetchPaginatedOptions
) => Promise<PaginatedResponse<T>>;

export function useFetchPaginated<T>(
  fetchFn: FetchPaginatedFunction<T>,
  options: UseFetchPaginatedOptions
) {
  const [data, setData] = useState<T[]>([]);
  const [metadata, setMetadata] = useState<PaginationMetadata>({
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!options.enable) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchFn(options);
        setData(response.data);
        setMetadata(response.metadata);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [options.currentPage, options.pageSize, options.reload, options.enable]);

  return { data, metadata, loading, error };
}

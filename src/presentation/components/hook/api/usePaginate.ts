import { PaginateCommand, PaginationMetadata, ResponseApi } from "@/common/types";
import { useEffect, useState } from "react";

export function usePaginate<T>(
  action: (comannd: PaginateCommand) => Promise<ResponseApi<T[]>>,
  {
    currentPage,
    pageSize,
    enable = true,
    reload = false,
  }: {
    currentPage: number;
    pageSize: number;
    enable?: boolean;
    reload?: boolean;
  }
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
    if (!enable) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await action({ currentPage, pageSize });
        setData(res.data);
        setMetadata(res.metadata ?? { totalItems: 0, totalPages: 0, currentPage: 0 });
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [action, currentPage, pageSize, reload, enable]);

  return { data, metadata, loading, error };
}

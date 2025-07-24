import { useEffect, useState } from "react";
import { Axios } from "../../../infrastructure";

interface PaginationMetadata {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  reload?: boolean;
}

interface PaginatedResponse<T> {
  data: T[];
  metadata: PaginationMetadata;
}

interface NonPaginatedResponse<T> {
  data: T[];
}

interface SingleItemResponse<T> {
  data: T;
}

interface UseFetchGetOpctions {
  paginated?: boolean;
  currentPage?: number;
  pageSize?: number;
  reload?: boolean;
  byId?: number | string | null;
  enable?: boolean;
}

export function UseFetchGet<T>(endPoint: string, options: UseFetchGetOpctions) {
  const [data, setData] = useState<T[] | null>(null);
  const [metadata, setMetadata] = useState<PaginationMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { paginated, currentPage, pageSize, reload, byId, enable } = options;

  useEffect(() => {
    if (!enable || !endPoint) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (paginated) {
          //Consulta paginada
          const { currentPage = 1, pageSize = 5 } = options;
          const respuesta = await Axios.get<
            PaginatedResponse<T>,
            { page: number; limit: number }
          >(endPoint, {
            page: currentPage,
            limit: pageSize,
          });

          setData(respuesta.data);
          setMetadata(respuesta.metadata);
        } else if (byId) {
          //Consulta por ID
          const respuesta = await Axios.get<SingleItemResponse<T>, undefined>(
            `${endPoint}/${byId}`
          );
          setData([respuesta.data]);
          setMetadata(null);
        } else {
          //Consulta no paginada
          const respuesta = await Axios.get<NonPaginatedResponse<T>, undefined>(
            `${endPoint}`
          );
          setData(respuesta.data);
          setMetadata(null);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endPoint, paginated, currentPage, pageSize, reload, byId, enable]);

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

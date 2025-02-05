import React from "react";

interface UsePaginationOptions<T> {
  data: T[];
  rowsPerPage: number;
}

export function usePagination<T>({ data, rowsPerPage }: UsePaginationOptions<T>) {
  const [page, setPage] = React.useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const currentPageItems = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [page, rowsPerPage, data]);

  const goToPage = (page: number) => {
    setPage(page);
  };

  return {
    page,
    totalPages,
    currentPageItems,
    goToPage,
  };
}

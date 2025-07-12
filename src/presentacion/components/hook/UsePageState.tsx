import { useState } from "react";

interface UsePageStateProps {
  initialPage?: number;
  initialPageSize?: number;
}

export function usePageState({ initialPage = 1, initialPageSize = 5 }: UsePageStateProps = {}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const resetPage = () => {
    setCurrentPage(initialPage);
    setPageSize(initialPageSize);
  };

  return {
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
    resetPage,
  };
}
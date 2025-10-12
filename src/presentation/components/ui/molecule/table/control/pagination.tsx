import { Pagination } from "@heroui/react";

interface PaginationProps {
  page: number;
  total: number;
  setPage: (page: number) => void;
}

export function Paginacion({
  page,
  total,
  setPage,
}: PaginationProps): JSX.Element {
  return (
    <div className="flex w-full justify-center">
      <Pagination
        classNames={{
          item: "text-white",
          cursor: "bg-brand-first text-white",
        }}
        isCompact
        showControls
        page={page}
        total={total}
        onChange={setPage}
      />
    </div>
  );
}

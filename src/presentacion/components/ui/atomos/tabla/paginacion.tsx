import { Pagination } from "@nextui-org/react";

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
        isCompact
        showControls
        showShadow
        color="secondary"
        page={page}
        total={total}
        onChange={setPage}
      />
    </div>
  );
}

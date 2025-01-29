import { Pagination } from "@heroui/react";

interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

export default function Pagina({
  page,
  total,
  onChange,
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
        onChange={onChange}
      />
    </div>
  );
}

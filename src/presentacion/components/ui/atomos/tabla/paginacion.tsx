import { Pagination } from "@nextui-org/react";

interface PaginationProps {
    page: number;
    total: number;
    onChange: (page: number) => void;
  }
  
  const Pagina: React.FC<PaginationProps> = ({ page, total, onChange }) => {
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
  };
  
  export default Pagina;
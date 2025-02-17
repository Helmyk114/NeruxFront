import React, { useState } from "react";
import { UsefecthGet } from "../components/hook";
import { TableSimple } from "../components/ui/organismo";
import { userColumnRender, Users } from "../components/ui/organismo";
import { columns } from "../components/ui/organismo";

const Clientes: React.FC = () => {
  const [currentePage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const { data, metadata, loading, error } = UsefecthGet<Users>(
    "/info/business",
    currentePage,
    pageSize
  );
  

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <h1 className="font-bold text-3xl">Clientes</h1>

      <TableSimple
        tabla="Clientes"
        columnas={columns}
        columnRender={userColumnRender}
        data={data || []}
        getRowKey={(item) => item.idUser} 
        isLoading={loading}
        error={error?.message}
        page={metadata?.currentPage || 1}
        totalPages={metadata?.totalPages || 1}
        setPage={handlePageChange}
      />
    </>
  );
};

export default Clientes;

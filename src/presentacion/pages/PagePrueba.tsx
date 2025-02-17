import React, { useState } from "react";
import { TemplatePageTable } from "../components/ui/template/plantillaPages";
import Sidebar from "../components/ui/organismo/sidebar/sidebar";
import { UsefecthGet } from "../components/hook";
import { TableSimple } from "../components/ui/organismo";
import { userColumnRender,  } from "../components/ui/organismo";
import { columns } from "../components/ui/organismo";
import { InfoBusiness } from "../../domain/entities/InfoBusiness";

const PagePrueba: React.FC = () => {
  const [currentePage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { data, metadata, loading, error } = UsefecthGet<InfoBusiness>(
    "/info/business",
    currentePage,
    pageSize
  );

  console.log(data)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  

  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      mainContent={
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
            totalItems={metadata.totalItems}
            setPageSize={setPageSize}
          />
        </>
      }
    />
  );
};

export default PagePrueba;

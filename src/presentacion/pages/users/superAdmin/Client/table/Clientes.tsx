import { useState } from "react";
import { useActionTables, UseFetchGet } from "../../../../../components/hook";
import { InfoBusiness } from "../../../../../../domain/entities/InfoBusiness";
import { TemplatePageTable } from "../../../../../components/ui/template";
import { Sidebar, TableSimple } from "../../../../../components/ui/organismo";
import { Title1 } from "../../../../../components/ui/atomos";
import { columnsClient } from "./columnsClient";
import { clientColumnRender } from "./clientColumnRender";



export const Clientes: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { data, metadata, loading, error } = UseFetchGet<InfoBusiness>(
    "/user-Admin",
    {paginated: true, currentPage, pageSize, reload: false}
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const {
    handleEdit,
    handleView,
    handleDelete,
  } = useActionTables<number | string>();

  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      mainContent={
        <>
          <Title1 clasname="text-start" titulo="Clientes" />

          <TableSimple
            tabla="Clientes"
            nameButton="Nuevo cliente +"
            columnas={columnsClient}
            columnRender={clientColumnRender(
              (item) => handleEdit(item.idUser),
              (item) => handleView(item.idUser),
              (item) => handleDelete(item.idUser)
            )}
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

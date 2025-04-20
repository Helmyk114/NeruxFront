import React, { useState } from "react";
import { TemplatePageTable } from "../../components/ui/template/plantillaPages";
import Sidebar from "../../components/ui/organismo/sidebar/sidebar";
import { UsefecthGetPaginatio } from "../../components/hook";
import { TableSimple } from "../../components/ui/organismo";
import { userColumnRender } from "../../components/ui/organismo";
import { columns } from "../../components/ui/organismo";
import { InfoBusiness } from "../../../domain/entities/InfoBusiness";
import { useDisclosure } from "@heroui/react";
import Drawer1 from "../../components/ui/organismo/tablas/config/drawerPrueba";

const Clientes: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentePage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { data, metadata, loading, error } = UsefecthGetPaginatio<InfoBusiness>(
    "/info/business",
    currentePage,
    pageSize
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleEdit = (user: InfoBusiness) => {
    console.log("Editando:", user.idUser);
    // Lógica para editar
  };

  const handleView = () => {
    onOpen();
  };

  const handleDelete = () => {
    console.log("hola");
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
            columnRender={userColumnRender(
              handleEdit,
              handleView,
              handleDelete
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

          <Drawer1 isOpen={isOpen} onClose={() => onOpenChange()} />
        </>
      }
    />
  );
};

export default Clientes;

import React from "react";
import { UsefecthGet } from "../components/hook";
import { TableSimple } from "../components/ui/organismo";
import { userColumnRender, Users } from "../components/ui/organismo";
import { columns } from "../components/ui/organismo";

const Clientes: React.FC = () => {
  const { data, loading, error } = UsefecthGet<Users[]>("/user");

  return (
    <>
      <h1 className="font-bold text-3xl">Clientes</h1>

      <TableSimple
        tabla="Clientes"
        columnas={columns}
        columnRender={userColumnRender}
        data={data || []}
        getKey={(item) => item.idUser}
        isLoading={loading}
        error={error?.message}
        rowsPerPage={7}
      />
    </>
  );
};

export default Clientes;

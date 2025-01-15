import React from "react";
//import Tablas from "../components/ui/organismo/tablas/tablaClientes";
import { Background } from "../components/ui/atomos";
import UsefecthGet from "../components/hook/UsefecthGet";
import TableSimple from "../components/ui/organismo/tablas/tablaSimple";
import {
  userColumnRender,
  Users,
} from "../components/ui/organismo/tablas/config/UserTable.config";
import { columns } from "../components/ui/organismo/data";

const Clientes: React.FC = () => {
  const { data, loading, error } = UsefecthGet<Users[]>("/user");

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Background>
      <div className="ml-44 mb-10 lg:text-4xl">
        <h1 className="font-bold text-3xl">Clientes</h1>
        {/* <TextoInicio
          spans={[
            { texto: "Clientes", className: "font-bold text-3xl lg:text-4xl" },
          ]}
          className="py-2 font-OpenSans text-white"
        /> */}
      </div>
      {/* <Tablas columnas={columns} columnRender={userColumnRender} data={data} />
       */}
      <TableSimple
        tabla="Clientes"
        columnas={columns}
        columnRender={userColumnRender}
        data={data || []}
        getKey={(item) => item.idUser}
        isLoading={loading}
      />
    </Background>
  );
};

export default Clientes;

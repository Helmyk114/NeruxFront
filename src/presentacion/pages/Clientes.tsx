import React from "react";
import Tablas from "../components/ui/organismo/tablas/tablaClientes";
import { Background, TextoInicio } from "../components/ui/atomos";
import fecthGet from '../components/hook/fecthGet';
import { columns } from "../components/ui/organismo/data";
import { userColumnRender } from "../components/ui/organismo/tablas/config/UserTable.config";


const Clientes: React.FC = () => {
    const { data, loading, error } = fecthGet<any>('/user');

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;
  return (
    <Background>
      <div className="ml-44 mb-10">
        <TextoInicio
          spans={[
            { texto: "Clientes", className: "font-bold text-3xl lg:text-4xl" },
          ]}
          className="py-2 font-OpenSans text-white"
        />
      </div>
      <Tablas columnas={columns} columnRender={userColumnRender} data={data} />
    </Background>
  );
};

export default Clientes;

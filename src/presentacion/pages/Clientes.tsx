
// import React from 'react';
// import Background from '../components/ui/atomos/paginaPrincipal/background';

// import Tablas from '../components/ui/organismo/tablas/tablaClientes';


// import { IconHome } from '@tabler/icons-react';
// import MigaPan from '../components/ui/moleculas/tabla/migaPan';
// import TextoInicio from '../components/ui/atomos/paginaPrincipal/textoInicio';
// const statusOptions = [
//   { uid: "active", name: "Active" },
//   { uid: "paused", name: "Paused" },
//   { uid: "vacation", name: "Vacation" },
// ];

// const Clientes: React.FC = () => {
//   const [statusFilter, setStatusFilter] = React.useState<Set<Key>>(new Set());
//   const migaItem = [
//     { label: "Inicio / Clientes ", href: "/clientes", icon: <IconHome size={16} /> },
   
//   ];
//     return(
    
//      <Background
//         className=""
//        color='black' >
//         <div className='ml-44 mb-10'>
//         <TextoInicio
//           spans={[
//           { texto: "Clientes", className: "font-bold text-3xl lg:text-4xl" },
//           ]}
//            className="py-2 font-OpenSans text-white"/>
//         <MigaPan items={migaItem} />
//         </div>

        

//            <Tablas/>
//       </Background>
      
//     );
// };

// export default Clientes;
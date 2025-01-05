// import React from "react";
// import PlantillaGenerica from "../components/ui/template/paginaPrincipal/plantillaGenerica";
// import TextoInicio from "../components/ui/atomos/paginaPrincipal/textoInicio";
// import login from "../../images/Login.png";
// import Logo from "../components/ui/atomos/paginaPrincipal/logo";
// import Background from "../components/ui/atomos/paginaPrincipal/background";
// import FondoLogin from "../../images/FondoLogin.png";

// const NuevaContraseña: React.FC = () => {
//   return (
//     <Background className="bg-black">
//       <div className="relative flex items-center justify-center h-screen">
//         <PlantillaGenerica
//           izquierda={
//             <div>
//               <Logo
//                 src={FondoLogin}
//                 alt="fondo"
//                 width=""
//                 heigth=""
//                 className="w-[97%] h-[94%] absolute inset-4  z-0 rounded-l-[34px] "
//               />
//               <div className="relative z-10">
//                 <div className="flex ml-12 mt-12">
//                   <Logo
//                     src={login}
//                     alt="logo"
//                     width="250px"
//                     heigth=""
//                     className="md:w-48 lg:w-64 sm:w-48 absolute z-20"
//                   />
//                 </div>

//                 <div className="mt-72 ml-14">
//                   <div className="overflow-visible">
//                     <TextoInicio
//                       spans={[
//                         {
//                           texto: "¡VAMOS A CREAR TU\n NUEVA CONTRASEÑA!\n",
//                           className: "font-bold text-3xl lg:text-4xl",
//                         },

//                         {
//                           texto:
//                             "Solo queda un paso más para\n completar el proceso.",
//                           className: "italic 2xl lg:text-2xl",
//                         },
//                       ]}
//                       className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           }
//           derecha={<div>{/* Contenido derecho si es necesario */}</div>}
//         />
//       </div>
//     </Background>
//   );
// };

// export default NuevaContraseña;

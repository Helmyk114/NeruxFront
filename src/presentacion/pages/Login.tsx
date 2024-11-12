import React from "react";
import PlantillaGenerica from "../components/ui/template/notificaciones/paginaPrincipal/plantillaGenerica";
import TextoInicio from '../components/ui/atomos/paginaPrincipal/textoInicio';
import login from "../../images/Login.png";
import Logo from "../components/ui/atomos/paginaPrincipal/logo";
import Background from "../components/ui/atomos/paginaPrincipal/background";
import FondoLogin from '../../images/FondoLogin (1).png';
import LoginForm from "../components/ui/moleculas/LoginForm";

const Login: React.FC = () => {
  const handleLoginSubmit = (values: { usuario: string; password: string }) => {
    console.log("Datos del formulario:", values);
    // Aquí puedes implementar la lógica de autenticación
  };

  return (
    <Background
    className=""
    >
      <div className="relative flex items-center justify-center h-screen">
        <PlantillaGenerica
          izquierda={
            <div>
              <Logo
                 src={FondoLogin}
                alt="fondo"
                width=""
                heigth=""
                className="w-[97%] h-[94%] absolute inset-4  z-0 rounded-l-[34px] " 
              />
              <div className="relative z-10">
                <div className="flex ml-12 mt-12">
                  <Logo
                    src={login}
                    alt="logo"
                    width="250px"
                    heigth=""
                    className="md:w-48 lg:w-64 sm:w-48 absolute z-20"
                  />
                </div>

                <div className="mt-64 ml-14">
                  <div className="overflow-visible">
                    <TextoInicio
                      spans={[
                        { texto: "BIENVENID@\n", className: "font-bold text-3xl lg:text-5xl" },
                        { texto: "¡Empieza tu viaje con\n nuestro ", className: "italic font-light text-2xl lg:text-4xl" },
                        { texto: "sistema de\n gestión!", className: "font-semibold 4xl lg:text-4xl" },
                      ]}
                      className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          derecha={<div className="flex items-center justify-center h-full"> {/* Centrar vertical y horizontalmente */}
          <div className="w-72"> {/* Ancho del contenedor del formulario */}
            <LoginForm onSubmit={handleLoginSubmit} />
          </div>
        </div>}
        />
      </div>
    </Background>
  );
};

export default Login;

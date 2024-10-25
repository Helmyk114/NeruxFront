import React from "react";
import PlantillaGenerica from "./components/ui/template/plantillaGenerica";
import TextoInicio from './components/ui/atoms/textoInicio';
import login from "../../images/Login.png";
import Logo from "./components/ui/atoms/logo";
import Background from "./components/ui/atoms/background";
import ImgBackground from './components/ui/atoms/imgFondo';
import FondoLogin from '../../images/FondoLogin.png';

const OlvidarContraseña: React.FC = () => {
  return (
    <Background className="bg-gradient-to-b from-purpleStart to-purpleEnd">
      <div className="relative flex items-center justify-center h-screen">
        <PlantillaGenerica
          izquierda={
            <div>
              < ImgBackground
                src={FondoLogin}
                alt="fondo"
                width=""
                heigth=""
                className="absolute inset-0 z-0 rounded-radius-34 w-full h-full" 
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

                <div className="mt-72 ml-14">
                  <div className="overflow-visible">
                    <TextoInicio
                      spans={[
                        { texto: "¡NO TE PREOCUPES\n A TODOS NOS PASA!\n", className: "font-bold text-3xl lg:text-4xl" },
                   
                        { texto: "Ingresa tu correo electrónico para\n que podamos ayudarte a restablecer\n tu contraseña.", className: "italic 2xl lg:text-2xl" },
                      ]}
                      className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          derecha={<div>{/* Contenido derecho si es necesario */}</div>}
        />
      </div>
    </Background>
  );
};

export default OlvidarContraseña;

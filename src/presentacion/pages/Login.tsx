import React from "react";
import PlantillaGenerica from "../components/ui/template/notificaciones/paginaPrincipal/plantillaGenerica";
import LoginForm from "../components/ui/moleculas/LoginForm";

const Login: React.FC = () => {
  const handleLoginSubmit = (values: { usuario: string; password: string }) => {
    console.log("Datos del formulario:", values);
    // Aquí puedes implementar la lógica de autenticación
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <PlantillaGenerica
        izquierda={
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4"></h1>
            <p className="text-xl lg:text-2xl italic">
             <br /> 
            </p>
          </div>
        }
        derecha={
          <div className="flex items-center justify-center h-full"> {/* Centrar vertical y horizontalmente */}
            <div className="w-72"> {/* Ancho del contenedor del formulario */}
              <LoginForm onSubmit={handleLoginSubmit} />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Login;

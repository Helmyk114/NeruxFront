import React from "react";
import LoginForm from "../molecules/LoginForm";

const LoginFormik: React.FC = () => {
  const handleLoginSubmit = (values: { usuario: string; password: string }) => {
    console.log("Datos del formulario:", values);
    // Aquí puedes implementar la lógica de autenticación
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Iniciar Sesión</h2>
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </div>
  );
};

export default LoginFormik;

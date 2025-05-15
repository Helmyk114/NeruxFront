import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import {
  Inicio,
  NuevaContraseña,
  OlvidarContraseña,
  RestablecerContraseña,
  Products,
  CrearProductos,
  Home,
} from "../presentacion/pages";
import Clientes from "../presentacion/pages/superAdmin/Client/table/Clientes";
import { CrearEmpresa } from "../presentacion/pages/admin/Empresa/CrearEmpresa";

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Olvide/Contraseña" element={<OlvidarContraseña />} />
        <Route path="/Nueva/Contraseña" element={<NuevaContraseña />} />
        <Route
          path="/Restablecer/Contraseña"
          element={<RestablecerContraseña />}
        />
        <Route path="/Home" element={<Home />} />
        <Route path="/Clientes" element={<Clientes />} />
        
        //Admin
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Productos" element={<Products />} />
        <Route path="/Productos/Crear" element={<CrearProductos />} />

        //Onboarding-Admin
        <Route path="/Crear/Empresa" element={<CrearEmpresa />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import {
  Inicio,
  NuevaContraseña,
  OlvidarContraseña,
  RestablecerContraseña,
  Products,
} from "../presentacion/pages";
import Clientes from "../presentacion/pages/superAdmin/Clientes";


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


        //Admin
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Productos" element={<Products />} />
        <Route path="/Clientes" element={<Clientes />} />
      </Routes>
    </Router>
  );
}

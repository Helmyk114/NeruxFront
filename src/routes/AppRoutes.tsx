import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import PagePrueba from "../presentacion/pages/PagePrueba";
import {
  NuevaContraseña,
  OlvidarContraseña,
  RestablecerContraseña,
} from "../presentacion/pages";

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
        <Route path="/clientes" element={<PagePrueba />} />
      </Routes>
    </Router>
  );
}

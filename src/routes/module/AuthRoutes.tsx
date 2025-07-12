import { Route } from "react-router-dom";
import {
  NuevaContraseña,
  OlvidarContraseña,
  RestablecerContraseña,
} from "../../presentacion/pages";
import App from "../../App";

export function AuthRoutes(): JSX.Element {
  return (
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/Olvide/Contraseña" element={<OlvidarContraseña />} />
      <Route path="/Nueva/Contraseña" element={<NuevaContraseña />} />
      <Route
        path="/Restablecer/Contraseña"
        element={<RestablecerContraseña />}
      />
    </Route>
  );
}

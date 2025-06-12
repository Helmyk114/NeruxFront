import { Route } from "react-router-dom";
import { PrivateRoute } from "../ProtectRoutes";
import { UserRole } from "../../shared/types/loginTypes";

import {
  Clientes,
  Home,

} from "../../presentacion/pages";


export function SuperAdminRoutes(): JSX.Element {
  return (
    <Route element={<PrivateRoute allowedRole={[UserRole.SUPERADMIN]} />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/Clientes" element={<Clientes />} />
    </Route>
  );
}

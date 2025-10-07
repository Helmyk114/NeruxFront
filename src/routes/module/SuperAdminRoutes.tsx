import { Route } from "react-router-dom";
import { Clientes, Home } from "@/Presentacion/pages";
import { PrivateRoute } from "../ProtectRoutes";
import { UserRole } from "@/Domain/interface";

export function SuperAdminRoutes(): JSX.Element {
  return (
    <Route element={<PrivateRoute allowedRole={[UserRole.SUPERADMIN]} />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/Clientes" element={<Clientes />} />
    </Route>
  );
}

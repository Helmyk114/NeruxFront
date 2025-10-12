import { Route } from "react-router-dom";
import { Home } from "@/presentation/pages";
import { PrivateRoute } from "../ProtectRoutes";
import { UserRole } from "@/common/constant/enum";

export function SuperAdminRoutes(): JSX.Element {
  return (
    <Route element={<PrivateRoute allowedRole={[UserRole.SUPERADMIN]} />}>
      <Route path="/Home" element={<Home />} />
      {/* <Route path="/Clientes" element={<Clientes />} /> */}
    </Route>
  );
}

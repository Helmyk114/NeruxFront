import { Route } from "react-router-dom";
import { PrivateRoute } from "../ProtectRoutes";
import { UserRole } from "@/shared/types/loginTypes";
import {
  Categories,
  CrearEmpresa,
  CrearProductos,
  Inicio,
  Products,
  Proveedores,
} from "@/presentacion/pages";

export function AdminRoutes(): JSX.Element {
  return (
    <Route element={<PrivateRoute allowedRole={[UserRole.ADMIN]} />}>
      <Route path="/Crear/Empresa" element={<CrearEmpresa />} />

      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Productos" element={<Products />} />
      <Route path="/Productos/Crear" element={<CrearProductos />} />
      <Route path="/Categorias" element={<Categories />} />
      <Route path="/Proveedores" element={<Proveedores />} />
    </Route>
  );
}

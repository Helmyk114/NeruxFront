import { Navigate, Outlet } from "react-router-dom";
import { userStore } from "../store/userStore";
import { UserRole } from "@/Domain/interface";

interface PrivateRouteProps {
  allowedRole: UserRole[];
  redirectTo?: string;
}

const defaultRedirects: Record<UserRole, string> = {
  1: "/Home",
  2: "/Inicio",
  3: "",
  4: "",
};

export const PrivateRoute = ({
  allowedRole,
  redirectTo,
}: PrivateRouteProps) => {
  const user = userStore((state) => state.user);

  if (!user || !allowedRole.includes(user.role)) {
    const redirectDefault =
      redirectTo || defaultRedirects[user?.role ?? UserRole.ADMIN];
    return <Navigate to={redirectDefault} replace />;
  }

  return <Outlet />;
};

import { useUserStore } from "@/common/store";
import { UserRole } from "@/common/constant/enum";
import { Navigate, Outlet } from "react-router-dom";

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
  const user = useUserStore((state) => state.user);

  if (!user || !allowedRole.includes(user.role)) {
    const redirectDefault =
      redirectTo ||
      defaultRedirects[(user?.role as UserRole) ?? UserRole.ADMIN];
    return <Navigate to={redirectDefault} replace />;
  }

  return <Outlet />;
};

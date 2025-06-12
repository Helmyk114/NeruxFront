import { Navigate, Outlet } from "react-router-dom";
import { UserRole } from "../shared/types/loginTypes";
import { userStore } from "../store/userStore";

interface PrivateRouteProps {
  allowedRole: UserRole[],
  redirectTo?: string,
}

export const PrivateRoute = ({allowedRole, redirectTo = "/"}: PrivateRouteProps) => {
  const user = userStore.getState().user;

  if (!user || !allowedRole.includes(user.role)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}
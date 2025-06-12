import { BrowserRouter as Router, Routes } from "react-router-dom";
import { AdminRoutes } from "./module/AdminRoutes";
import { SuperAdminRoutes } from "./module/SuperAdminRoutes";
import { AuthRoutes } from "./module/AuthRoutes";

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        {AuthRoutes() }
        {SuperAdminRoutes()}
        {AdminRoutes()}
      </Routes>
    </Router>
  );
}

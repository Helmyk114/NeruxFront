import Logotipo from "../../../../../images/Logotipo.png";
import { useNavigate } from "react-router-dom";
import { sidebarConfig } from "./sidebar.config";
import { Logo } from "../../atomos";

import { FaCogs } from "react-icons/fa";
import { AuthServices } from "../../../../../infrastructure";
import { userStore } from "../../../../../store/userStore";
import { IconLogout } from "@tabler/icons-react";

export const Sidebar = () => {
  const user = userStore((state) => state.user);
  const navigate = useNavigate();

  if (!user) return null;

  let sidebarItems;
  if (user.role === "Admin") {
    sidebarItems =
      user.business === "" || user.business === null
        ? sidebarConfig.adminWithoutBusiness
        : sidebarConfig.adminWithBusiness;
  } else {
    sidebarItems = sidebarConfig[user.role] || [];
  }

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="flex flex-col justify-between w-64 h-screen bg-background-four p-4  rounded-r-2xl ">
      <div>
        <div className="w-100%">
          <Logo src={Logotipo} alt="logo" />
        </div>

        <nav className="flex flex-col space-y-2">
          {sidebarItems.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.index}
                onClick={() => handleRedirect(item.path)}
                className={`flex items-center p-2 rounded-lg
                  ${
                    active
                      ? "bg-button-active text-sidebar-prymary"
                      : "hover:bg-button-active text-sidebar-prymary"
                  }`}
              >
                <span className="mr-2">
                  <item.icon />
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col space-y-2 border-t pt-4">
        <button
          onClick={() => {
            AuthServices.logout(navigate);
          }}
          className="flex items-centerp-2 rounded-lg text-sidebar-second hover:underline"
        >
          <span className="mr-2">
            <IconLogout />
          </span>
          Cerrar Sesión
        </button>

        <button
          onClick={() => handleRedirect("/ajustes")} // Redirección estática o dinámica según necesidad
          className="flex items-center text-sm hover:underline text-text"
        >
          <FaCogs className="mr-2" /> {/* Icono para ajustes */}
          Ajustes
        </button>
      </div>
    </aside>
  );
};

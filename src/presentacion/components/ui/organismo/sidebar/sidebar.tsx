import Logotipo from "../../../../../images/Logotipo.png";
import { useNavigate } from "react-router-dom";
import { sidebarConfigEnd, sidebarConfigStar } from "./sidebar.config";
import Logito from "../../../../../images/Logito.png";
import { AuthServices } from "../../../../../infrastructure";
import { userStore } from "../../../../../store/userStore";
import {
  IconChevronLeft,
  IconChevronRight,
  IconLogout,
} from "@tabler/icons-react";
import { Logo } from "../../atomos/paginaPrincipal/logo";
import { sidebarStore } from "../../../../../store/sidebarStore";

export const Sidebar = () => {
  const { isCollapsed, toggle } = sidebarStore();
  const user = userStore((state) => state.user);
  const navigate = useNavigate();

  if (!user) return null;

  let startItems;
  let endItes;

  if (user.role === "Admin") {
    const key =
      user.business === "" || user.business === null
        ? "adminWithoutBusiness"
        : "adminWithBusiness";
    startItems = sidebarConfigStar[key];
    endItes = sidebarConfigEnd[key];
  } else {
    startItems = sidebarConfigStar[user.role] || [];
    endItes = sidebarConfigEnd[user.role] || [];
  }

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <aside
      className={`flex flex-col justify-between transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-background-four p-4 rounded-r-2xl`}
    >
      <div
        className={`flex items-center mb-4 ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        <div>
          {isCollapsed ? (
            <Logo src={Logito} alt="logo" />
          ) : (
            <Logo src={Logotipo} alt="logo" />
          )}
        </div>

        {!isCollapsed && (
          <button
            onClick={toggle}
            className="ml-2 p-2 text-white rounded hover:bg-sidebar-button"
          >
            <IconChevronLeft />
          </button>
        )}
      </div>

      {isCollapsed && (
        <button
          onClick={toggle}
          className="fixed top-5 ml-12 p-2 text-white rounded hover:bg-sidebar-button"
        >
          <IconChevronRight />
        </button>
      )}

      <div>
        <nav className="flex flex-col space-y-2 -mt-32">
          {startItems.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.index}
                onClick={() => handleRedirect(item.path)}
                className={`flex items-center p-2 rounded-lg font-OpenSans transition-all duration-1000 overflow-hidden
                  ${
                    active
                      ? "bg-button-active text-sidebar-prymary"
                      : "hover:bg-button-active text-sidebar-prymary"
                  }`}
              >
                <span className="mr-2 flex-shrink-0">
                  <item.icon />
                </span>
                <span
                  className={`ml-1 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap
                    ${
                      isCollapsed
                        ? "opacity-0 max-w-0"
                        : "opacity-100 max-w-[200px]"
                    }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col space-y-2 pt-4 mb-5">
        <nav className="flex flex-col space-y-2">
          {endItes.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.index}
                onClick={() => handleRedirect(item.path)}
                className={`flex items-center p-2 rounded-lg font-OpenSans transition-all duration-1000 overflow-hidden
                  ${
                    active
                      ? "bg-button-active text-sidebar-prymary"
                      : "hover:bg-button-active text-sidebar-prymary"
                  }`}
              >
                <span className="mr-2 flex-shrink-0">
                  <item.icon />
                </span>
                <span
                  className={`ml-1 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap
                    ${
                      isCollapsed
                        ? "opacity-0 max-w-0"
                        : "opacity-100 max-w-[200px]"
                    }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
        <button
          onClick={() => {
            AuthServices.logout(navigate);
          }}
          className="flex items-centerp-2 p-2 text-sidebar-second hover:underline font-OpenSans"
        >
          <span className="mr-2 flex-shrink-0">
            <IconLogout />
          </span>
          <span
            className={`ml-1 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap
              ${
                isCollapsed ? "opacity-0 max-w-0" : "opacity-100 max-w-[200px]"
              }`}
          >
            Cerrar Sesión
          </span>
        </button>
      </div>
    </aside>
  );
};

import { useState } from "react";
import Logito from "@/images/Logito.png";
import Logotipo from "@/images/Logotipo.png";
import { UserRole } from "@/shared/types/loginTypes";
import { sidebarStore, userStore } from "@/store";
import { useNavigate } from "react-router-dom";
import { AuthServices } from "@/infrastructure";
import { ThemeSwitcher } from "@/presentacion/components/ui/organismo";
import {
  sidebarConfigEnd,
  sidebarConfigStar,
  SidebarItem,
} from "./sidebar.config";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconLogout,
} from "@tabler/icons-react";
import { Logo } from "@/presentacion/components/ui/atomos";

export const Sidebar = () => {
  const { isCollapsed, toggle } = sidebarStore();
  const user = userStore((state) => state.user);
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );

  if (!user) return null;

  let startItems;
  let endItes;

  if (user.role === UserRole.ADMIN) {
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
    if (path !== "#") {
      navigate(path);
    }
  };

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const toggleSubMenu = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderItem = (item: SidebarItem, isSubItem = false) => {
    const active = isActive(item.path);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems[item.index];

    return (
      <div key={item.index} className={`${isSubItem ? "ml-6" : ""}`}>
        <button
          onClick={() => {
            if (hasSubItems) {
              toggleSubMenu(item.index);
            } else {
              handleRedirect(item.path);
            }
          }}
          className={`flex items-center justify-between w-full p-2 rounded-lg font-OpenSans transition-all duration-1000 overflow-hidden
            ${
              active
                ? "bg-button-active text-typography-first"
                : "hover:bg-button-active text-typography-first"
            }`}
        >
          <div className="flex items-center">
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
          </div>

          {hasSubItems && !isCollapsed && (
            <span className="ml-2">
              {isExpanded ? (
                <IconChevronDown size={16} />
              ) : (
                <IconChevronRight size={16} />
              )}
            </span>
          )}
        </button>

        {hasSubItems && isExpanded && !isCollapsed && (
          <div className="mt-1 space-y-1">
            {item.subItems?.map((subItem) => renderItem(subItem, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-base-sidebar p-4 rounded-r-2xl overflow-y-auto`}
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
            className="ml-2 p-2 text-typography-first rounded hover:bg-sidebar-button"
          >
            <IconChevronLeft />
          </button>
        )}
      </div>

      {isCollapsed && (
        <button
          onClick={toggle}
          className="fixed top-5 ml-12 p-2 text-typography-first rounded hover:bg-sidebar-button"
        >
          <IconChevronRight />
        </button>
      )}

      <div  className="flex-1 flex flex-col justify-between">
        <nav className="flex flex-col space-y-2">
          {startItems.map((item) => renderItem(item))}
        </nav>
      </div>

      <div className="flex flex-col space-y-2 pt-4 mb-5">
        <nav className="flex flex-col space-y-2">
          {endItes.map((item) => renderItem(item))}
        </nav>
        <button
          onClick={() => {
            AuthServices.logout(navigate);
          }}
          className="flex items-centerp-2 p-2 text-marca-tertiary hover:underline font-OpenSans"
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
        <span>
          <ThemeSwitcher />
        </span>
      </div>
    </aside>
  );
};

import Logotipo from "../../../../../images/Logotipo.png";
import Logos from "../../../../../images/Logo.png";
import {
  IconCategory,
  IconChevronLeft,
  IconHome,
  IconStack2,
  IconUsersGroup,
} from "@tabler/icons-react";
import SidebarLink from "../../moleculas/sidebar/sidebarLink";
import { useState } from "react";
import { Logo } from "../../atomos";
import { Button } from "@heroui/react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <aside
      className={`min-h-full ${
        isCollapsed ? "w-16" : "w-64"
      } bg-grisFondo2 text-white flex flex-col transition-all duration-300`}
    >
      <div className="p-4 bg-grisFondo2 flex">
        <div className="w-100%">
          <Logo
            src={isCollapsed ? Logos : Logotipo}
            alt="logo"
            className={`transition-all duration-300 ${
              isCollapsed ? "w-10 mx-auto" : "w-full"
            }`}
          />
        </div>

        <div>
          <Button
            isIconOnly
            color="default"
            variant="light"
            className="hover:bg-white w-1"
            startContent={
              <IconChevronLeft 
                stroke={1.25} 
                onClick={toggleSidebar} 
                className={`transition-all duration-300 ${isCollapsed ? "rotate-180" : ""}`}
              />
            }
          ></Button>
        </div>
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          <li>
            <SidebarLink
              href="/inicio"
              label={isCollapsed ? "" : "Inicio"}
              startIcon={<IconHome stroke={1.25} />}
            />
          </li>
          <li>
            <SidebarLink
              href="#dashboard"
              label="Dashboard"
              startIcon={<IconCategory stroke={1.25} />}
            />
          </li>
          <li>
            <SidebarLink
              href="/Productos"
              label="Productos"
              startIcon={<IconUsersGroup stroke={1.25} />}
            />
          </li>
          <li>
            <SidebarLink
              href="#Tarea"
              label="Tarea"
              startIcon={<IconStack2 stroke={1.25} />}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

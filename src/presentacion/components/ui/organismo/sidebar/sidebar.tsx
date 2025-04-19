import Login from "../../../../../images/Logotipo.png";
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
            src={Login}
            alt="logo"
            width=""
            heigth=""
            className="w-[100%] "
          />
        </div>

        <div className="w-10% ">
          <Button
            isIconOnly
            color="default"
            variant="light"
            className="hover:bg-hoverPurple w-1"
            startContent={
              <IconChevronLeft stroke={1.25} onClick={toggleSidebar} />
            }
          ></Button>
        </div>
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          <li>
            <SidebarLink
              href="#inicio"
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
              href="#Clientes"
              label="CLientes"
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

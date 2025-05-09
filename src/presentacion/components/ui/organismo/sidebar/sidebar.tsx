import Logotipo from "../../../../../images/Logotipo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hook/UseAuth";
import { sidebarConfig } from "./sidebar.config";
import { Logo } from "../../atomos";

import { FaCogs } from "react-icons/fa";
export const Sidebar = () => {

  const { user, hasCompany } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  let sidebarItems;
  if (user.role === 'Admin') {
    sidebarItems = hasCompany === "adminWithoutBusiness"
      ? sidebarConfig.adminWithoutBusiness
      : sidebarConfig.adminWithBusiness;
  } else {
    sidebarItems = sidebarConfig[user.role] || [];
  }

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <aside className="flex flex-col justify-between w-64 h-screen bg-background-four p-4  rounded-r-2xl ">

      <div>
        <div className="w-100%">
          <Logo src={Logotipo} alt="logo" />
        </div>

        <nav className="flex flex-col space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.index}
              onClick={() => handleRedirect(item.path)}
              className="flex items-center p-2 rounded-lg text-texts-sidebar hover:bg-button-active transition-colors"
            >
              <span className="mr-2">
                <item.icon />
              </span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Parte inferior: Cerrar sesión y ajustes */}
      <div className="flex flex-col space-y-2 border-t pt-4">
        <button
          onClick={() => {
            // Aquí tu lógica para cerrar sesión
            console.log("Cerrar sesión");
          }}
          className="flex items-center text-red-600 hover:text-red-800 transition-colors"
        >
          <span className="mr-2">🚪</span>
          Cerrar sesión
        </button>

        {/* Redirección a Ajustes */}
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

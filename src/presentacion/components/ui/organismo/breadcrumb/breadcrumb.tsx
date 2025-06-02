import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { IconSmartHome } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

export function BreadcrumbsCustom() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter(Boolean);

  if (location.pathname === "/Inicio") return null;

  return (
    <Breadcrumbs  itemClasses={{
      separator: "px-2",
    }} separator="/" >
      <BreadcrumbItem startContent={<IconSmartHome color="#D50891"/>}>
        <span
          onClick={() => navigate("/Inicio")}
          className="cursor-pointer hover:underline text-marca-tertiary"
        >
          Inicio
        </span>
      </BreadcrumbItem>

      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const label =
          path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

        return (
          <BreadcrumbItem key={routeTo}>
            {isLast ? (
              <span className="text-gray-600">{label}</span>
            ) : (
              <span
                onClick={() => navigate(routeTo)}
                className="cursor-pointer hover:underline"
              >
                {label}
              </span>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}

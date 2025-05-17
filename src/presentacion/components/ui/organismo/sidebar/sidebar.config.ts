import {
  IconAlertTriangle,
  IconBell,
  IconBox,
  IconDeviceAnalytics,
  IconInfoOctagon,
  IconLayoutDashboard,
  IconListDetails,
  IconSettings,
  IconSmartHome,
  IconUsers,
} from "@tabler/icons-react";
export interface SidebarItem {
  index: number;
  label: string;
  icon: React.ComponentType;
  path: string;
}

export const sidebarConfigStar: Record<string, SidebarItem[]> = {
  SuperAdmin: [
    { index: 1.1, label: "Inicio", path: "/Home", icon: IconSmartHome },
    { index: 1.2, label: "Dashboard", path: "", icon: IconLayoutDashboard },
    { index: 1.3, label: "Clientes", path: "/Clientes", icon: IconUsers },
    { index: 1.4, label: "Tareas", path: "", icon: IconListDetails },
    { index: 1.5, label: "Reportes", path: "", icon: IconDeviceAnalytics },
  ],
  adminWithoutBusiness: [
    { index: 2.1, label: "Inicio", path: "/Crear/Empresa", icon: IconSmartHome },
  ],
  adminWithBusiness: [
    { index: 3.1, label: "Inicio", path: "/Inicio", icon: IconSmartHome },
    { index: 3.2, label: "Productos", path: "/Productos", icon: IconBox },
    { index: 3.3, label: "Alertas", path: "/Alertas", icon: IconAlertTriangle },
    { index: 3.4, label: "Exportar datos", path: "/Data", icon: IconDeviceAnalytics },
  ],
};

export const sidebarConfigEnd: Record<string, SidebarItem[]> = {
  SuperAdmin: [
    {
      index: 1.1,
      label: "Notificaciones",
      path: "/Notification",
      icon: IconBell,
    },
    {
      index: 1.2,
      label: "Configuraciones",
      path: "/Configuration",
      icon: IconUsers,
    },
  ],
  adminWithoutBusiness: [
    { index: 2.1, label: "Soporte", path: "/Ayuda", icon: IconSmartHome },
    {
      index: 2.2,
      label: "Configuraciones",
      path: "/Configuracion",
      icon: IconSmartHome,
    },
  ],
  adminWithBusiness: [
    {
      index: 3.1,
      label: "Notificaciones",
      path: "/Notificaciones",
      icon: IconBell,
    },
    { index: 3.2, label: "Soporte", path: "/Soporte", icon: IconInfoOctagon },
    {
      index: 3.3,
      label: "Configuraciones",
      path: "/Configuraciones",
      icon: IconSettings,
    },
  ],
};


import { AlertTriangle, Box, DeviceAnalytics, LayoutDashboard, ListDetails, SmartHome, Users } from 'tabler-icons-react';

export interface SidebarItem {
  index: number;
  label: string;
  icon: React.ComponentType;
  path: string;
}

export const sidebarConfig: Record<string, SidebarItem[]> = {
  SuperAdmin:[
    {index: 1.1 ,label: 'Inicio', path: '/Home', icon: SmartHome},
    {index: 1.2 ,label: 'Dashboard', path: '',icon: LayoutDashboard},
    {index: 1.3 ,label: 'Clientes', path: '/Clientes',icon: Users},
    {index: 1.4 ,label: 'Tareas', path: '',icon: ListDetails},
    {index: 1.5 ,label: 'Reportes', path: '',icon: DeviceAnalytics},
  ],
  adminWithoutBusiness: [
    {index: 2.1 ,label: 'Inicio', path: '/Crear/Empresa', icon: SmartHome},
  ],
  adminWithBusiness: [
    {index: 3.1 ,label: 'Inicio', path: '/Inicio', icon: SmartHome},
    {index: 3.2 ,label: 'Productos', path: '/Productos', icon: Box},
    {index: 3.3 ,label: 'Alertas', path: '/Alertas',icon: AlertTriangle},
    {index: 3.4,label: 'Exportar datos', path: '/Data',icon: DeviceAnalytics},
  ],
}
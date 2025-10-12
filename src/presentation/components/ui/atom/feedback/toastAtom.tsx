import { toastMap } from "@/common/constant/mapping";
import { addToast, cn } from "@heroui/react";

interface Toast {
  mensaje: string;
  tipo: ToastType;
}
type ToastType = "success" | "error" | "info" | "warning";

export function ToastAtom({ mensaje, tipo }: Toast): void {
  addToast({
    classNames: {
      base: cn([
        "font-OpenSans text-sm",
        "dark:bg-base-sidebar dark:text-typography-first",
        "border-2",
        `dark: ${toastMap.color[tipo] || "border-semantic-informacion"}`,
      ]),
    },
    icon: <span className="">{toastMap.icon[tipo] || "ℹ️"}</span>,
    title: mensaje,
    variant: "bordered",
    radius: "sm",
    timeout: 3000,
    shouldShowTimeoutProgress: true,
  });
}

type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  color: Record<ToastType, string>;
  icon: Record<ToastType, string>;
}

export const toastMap: ToastProps = {
  color: { 
    success: "border-semantic-exito",
    error: "border-semantic-error",
    info: "border-semantic-informacion",
    warning: "border-semantic-advertencia",
  },
  icon: {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  },
};
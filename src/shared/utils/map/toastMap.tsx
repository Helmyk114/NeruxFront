import { SemanticIcons } from "@/shared/constants/icons/semanticIcons";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  color: Record<ToastType, string>;
  icon: Record<ToastType, JSX.Element>;
}

export const toastMap: ToastProps = {
  color: { 
    success: "border-semantic-exito",
    error: "border-semantic-error",
    info: "border-semantic-informacion",
    warning: "border-semantic-advertencia",
  },
  icon: {
    success: <SemanticIcons.sucess className="text-semantic-exito" size={20} />,
    error: <SemanticIcons.error className="text-semantic-error" size={20}/>,
    info: <SemanticIcons.info className="text-semantic-informacion" size={20}/>,
    warning: <SemanticIcons.warning className="text-semantic-advertencia" size={20}/>,
  },
};
import { create } from "zustand";
import { Toast } from "@/presentacion/components/ui/atomos/Toast";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  mensaje: string;
  tipo: ToastType;
}

interface ToastStore {
  newToast: (toast: Toast) => void;
}

export const toastStore = create<ToastStore>(() => ({
  newToast: (toast: Toast) => {
    Toast(toast);
  },
}));

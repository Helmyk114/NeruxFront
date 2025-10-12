import { create } from "zustand";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  mensaje: string;
  tipo: ToastType;
}

interface ToastStore {
  newToast: (toast: Toast) => void;
}

export const useToastStore = create<ToastStore>(() => ({
  newToast: (toast: Toast) => {
    Toast(toast);
  },
}));

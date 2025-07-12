import { toastStore } from "@/store/toastStore"

export const useToast = () => {
  const showToast = toastStore((state) => state.newToast);
  return {showToast}
}
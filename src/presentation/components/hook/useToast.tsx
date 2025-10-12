import { useToastStore } from "@/common/store";

export const useToast = () => {
  const showToast = useToastStore((state) => state.newToast);
  return { showToast };
};

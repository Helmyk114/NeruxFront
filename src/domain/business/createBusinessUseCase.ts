import { businessService } from "@/infrastructure";
import { BusinessForm } from "./business.entity";
import { userStore } from "@/store";

export const createBusinessUseCase = async (business: BusinessForm) => {
  try {
    const businessId = await businessService.createBusiness(business);

    const { user, setUser } = userStore.getState();
    if (user) {
      setUser({ ...user, business: businessId });
    }
  } catch (error) {
    console.error(error);
  }
};

import { businessService } from "@/infrastructure";
import { BusinessForm } from "./business.entity";
import { userStore } from "@/store";
import { cookie } from "@/shared";

export const BusinessUseCase = {
  createBusiness: async (business: BusinessForm) => {
    try {
      const { idBusiness, token } = await businessService.createBusiness(
        business
      );
      cookie.remove("token");
      cookie.set("token", token);

      const { user, setUser } = userStore.getState();
      if (user) {
        setUser({ ...user, business: idBusiness });
      }

    } catch (error) {
      console.error(error);
    }
  },
};

import { BusinessForm } from "./business.entity";
import { userStore } from "@/store";
import { businessService } from "@/infrastructure/services/business/business.service";
import { cookie } from "@/shared/utils/cookies";

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

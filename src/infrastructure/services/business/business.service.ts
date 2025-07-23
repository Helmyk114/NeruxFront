import { BusinessForm } from "@/domain";
import { Axios } from "../../http/Axios";

export const businessService = {
  createBusiness: async (business: BusinessForm) => {
    try {
      await Axios.post("/create-business", business);
    } catch (error) {
      throw new Error(`Error al crear la empresa: ${error}`);
    }
  },
};

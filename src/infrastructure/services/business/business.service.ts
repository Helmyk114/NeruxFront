import { BusinessForm } from "@/domain";
import { Axios } from "../../http/Axios";

export const businessService = {
  createBusiness: async (business: BusinessForm): Promise<string> => {
    try {
      const response = await Axios.post("/create-business", business);
      return response as string
    } catch (error) {
      throw new Error(`Error al crear la empresa: ${error}`);
    }
  },
};

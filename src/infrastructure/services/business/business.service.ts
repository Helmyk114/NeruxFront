import { BusinessForm } from "@/domain";
import { Axios } from "../../http/Axios";

export const businessService = {
  createBusiness: async (
    business: BusinessForm
  ): Promise<{ token: string; idBusiness: string }> => {
    try {
      const response = await Axios.post<{
        status: string;
        message: string;
        data: {
          token: string;
          business: string;
        };
      }>("/create-business", business);

      return {
        token: response.data.token,
        idBusiness: response.data.business,
      };
    } catch (error) {
      throw new Error(`Error al crear la empresa: ${error}`);
    }
  },
};

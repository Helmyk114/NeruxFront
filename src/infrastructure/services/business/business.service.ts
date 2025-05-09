import { CrearEmpresaFormValues } from "../../../presentacion/components/ui/organismo/forms/Business/CrearEmpresa/crearEmpresaTypes";
import { apiClient } from "../../http/ApiClient";

export const businessService = {
  createBusiness: async (business: CrearEmpresaFormValues) => {
    try {
      await apiClient.post("/create-business", business);
    } catch (error) {
      throw new Error(`Error al crear la empresa: ${error}`);
    }
  },
};

import { CrearEmpresaFormValues } from "../../../presentacion/components/ui/organismo/forms/Business/CrearEmpresa/crearEmpresaTypes";
import { Axios } from "../../http/Axios";


export const businessService = {
  createBusiness: async (business: CrearEmpresaFormValues) => {
    try {
      await Axios.post("/create-business", business);
    } catch (error) {
      throw new Error(`Error al crear la empresa: ${error}`);
    }
  },
};

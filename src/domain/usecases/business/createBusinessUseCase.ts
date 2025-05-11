import { businessService } from "../../../infrastructure/services/business/business.service";
import { CrearEmpresaFormValues } from "../../../presentacion/components/ui/organismo/forms/Business/CrearEmpresa/crearEmpresaTypes";

export const createBusinessUseCase = async (business: CrearEmpresaFormValues) => {
  await businessService.createBusiness(business);
}
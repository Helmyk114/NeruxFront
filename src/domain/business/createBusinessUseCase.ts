import { businessService } from "@/infrastructure";
import { CrearEmpresaFormValues } from "@/presentacion/components/ui";


export const createBusinessUseCase = async (business: CrearEmpresaFormValues) => {
  await businessService.createBusiness(business);
}
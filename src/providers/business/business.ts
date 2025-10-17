import { CreateBusiness } from "@/app/useCase";
import { BusinessApiRepository } from "@/infraestructura/api";

export const CreateBusinessUseCase = CreateBusiness(BusinessApiRepository)
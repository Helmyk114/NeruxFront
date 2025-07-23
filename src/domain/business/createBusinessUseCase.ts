import { businessService } from "@/infrastructure";
import { BusinessForm } from "./business.entity";

export const createBusinessUseCase = async (business: BusinessForm) => {
  await businessService.createBusiness(business);
}
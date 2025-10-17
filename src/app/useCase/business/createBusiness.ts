import { BusinessRepository } from "@/app/repository";
import { useUserStore } from "@/common/store";
import { TokenManager } from "@/infraestructura/session";
import { CreateBusinessCommand } from "@/presentation/models";

export function CreateBusiness(businessRepository: BusinessRepository) {
  return async (
    createBusinessCommand: CreateBusinessCommand
  ): Promise<void> => {
    const { name, nit, phone, email, address } = createBusinessCommand;
    const business = {
      name,
      nit,
      phone,
      email,
      address,
    };
    const { token, idBusiness } = await businessRepository.create(business);

    TokenManager.clearToken();
    TokenManager.saveToken(token);

    const { user, setUser } = useUserStore.getState();
    if (user) {
      setUser({ ...user, business: idBusiness });
    }
  };
}

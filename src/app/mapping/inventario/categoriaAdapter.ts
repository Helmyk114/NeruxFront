import { formatDate } from "@/common/utils";
import { CategoriaDetailApi, CategoriaPaginateApi } from "@/infraestructura/dto";
import { CategoriaDetailUi, CategoriaPaginateUi } from "@/presentation/models";

export const CategoriaAdapter = {
  toUiPaginate(api: CategoriaPaginateApi): CategoriaPaginateUi {
    return {
      id: api.id,
      name: api.name,
      description: api.description,
      isDefault: api.is_default,
    };
  },

  toUiDetail(api: CategoriaDetailApi): CategoriaDetailUi {
    return {
      id: api.id,
      name: api.name,
      description: api.description,
      productCount: api.product_count,
      createAt: formatDate(api.created_at),
      updateAt: formatDate(api.updated_at),
      isDefault: api.is_default,
    };
  },
};
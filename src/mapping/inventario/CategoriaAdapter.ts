import { formatDate } from "@/shared/utils/convert/fechaFormat";
import {
  CategoriaDetailApi,
  CategoriaPaginateApi,
} from "../../infrastructure/dto/inventario/CategoriaDto";
import { CategoriaDetailUi, CategoriaPaginateUi } from "@/presentacion/models";

export const CategoriaAdapter = {
  toUipaginate(api: CategoriaPaginateApi): CategoriaPaginateUi {
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

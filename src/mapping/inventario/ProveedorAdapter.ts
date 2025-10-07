
import { ProveedorDetailApi, ProveedorPaginateApi } from "@/infrastructure/dto";
import {
  ProveedorDetailUi,
  ProveedorPaginateUi,
} from "@/presentacion/Models/inventario/ProveedorModels";
import { formatDate } from "@/shared/utils/convert/fechaFormat";

export const ProveedorAdapter = {
  toUiPaginate(api: ProveedorPaginateApi): ProveedorPaginateUi {
    return {
      id: api.id,
      name: api.name,
      supplier: api.supplier,
      email: api.email,
      phone: api.phone,
      isDefault: api.is_default,
    };
  },

  toUiDetail(api: ProveedorDetailApi): ProveedorDetailUi {
    return {
      id: api.id,
      name: api.name,
      supplier: api.supplier,
      email: api.email,
      phone: api.phone,
      note: api.note,
      createAt: formatDate(api.created_at),
      updateAt: formatDate(api.updated_at),
      isDefault: api.is_default,
    };
  },
};

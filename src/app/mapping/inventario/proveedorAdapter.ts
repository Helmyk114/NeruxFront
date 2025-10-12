import { formatDate } from "@/common/utils";
import { ProveedorDetailApi, ProveedorPaginateApi } from "@/infraestructura/dto";
import { ProveedorDetailUi, ProveedorPaginateUi } from "@/presentation/models";

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

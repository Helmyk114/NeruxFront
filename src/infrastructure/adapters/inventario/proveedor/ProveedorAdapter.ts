import { Proveedor } from "@/domain/interface/inventario/proveedor";
import { ProveedorDetail, ProveedorPaginate } from "./ProveedorDto";
import { formatDate } from "@/shared";


export const ProveedorAdapter = {
  toDomainPaginate(api: ProveedorPaginate): Proveedor {
    return{
      id: api.id,
      name: api.name,
      supplier: api.supplier,
      email: api.email,
      phone: api.phone,
      isDefault: api.is_default
    }
  },

  toDomainDetail(api: ProveedorDetail): Proveedor {
    return{
      id: api.id,
      name: api.name,
      supplier: api.supplier,
      email: api.email,
      phone: api.phone,
      note: api.note,
      create_at: formatDate(api.created_at),
      update_at: formatDate(api.updated_at),
      isDefault: api.is_default
    }
  },
}
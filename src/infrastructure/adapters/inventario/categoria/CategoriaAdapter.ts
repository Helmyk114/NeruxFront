import { Categoria } from '@/domain/interface/inventario/categoria';
import { CategoriaPaginate, CategoriaDetail } from './CategoriaDto';
import { formatDate } from '@/shared';

export const CategoriaAdapter = {
  toDomainPaginate(api: CategoriaPaginate): Categoria {
    return{
      id: api.id,
      name: api.name,
      description: api.description,
      isDefault: api.is_default
    }
  },

  toDomainDetail(api: CategoriaDetail): Categoria {
    return{
      id: api.id,
      name: api.name,
      description: api.description,
      productCount: api.product_count,
      createAt: formatDate(api.created_at),
      updateAt: formatDate(api.updated_at),
      isDefault: api.is_default
    }
  },
}
import { InfoBusiness } from "../../../../../../domain/entities/InfoBusiness";
import { statusProductMap } from "../../../../../../shared/constants/colors/statusProductMap";
import { ActionsCell, ChipCell, CompactCell, ImgCell } from "../../../../../components/ui/atomos";
import { ColumnRender } from "../../../../../components/ui/organismo";


export const clientColumnRender = (
  onEdit: (user: InfoBusiness) => void,
  onView: (user: InfoBusiness) => void,
  onDelete: (user: InfoBusiness) => void
): ColumnRender<InfoBusiness> => ({
  nombre: (user: InfoBusiness) => (
    <ImgCell
      avatar={user.photoBusiness || ""}
      textTop={user.nameBusiness}
      textBotton={user.email}
    />
  ),
  administrador: (user: InfoBusiness) => (
    <CompactCell
      textTop={`${user.name} ${user.lastName}`}
      textBotton={user.phone}
    />
  ),
  estado: (user: InfoBusiness) => (
    <ChipCell
      colorText={statusProductMap[user.states].color}
      colorDot={statusProductMap[user.states].dot}
      texto={user.states}
    />
  ),
  acciones: (user: InfoBusiness) => (
    <ActionsCell
      onEdit={() => onEdit(user)}
      onView={() => onView(user)}
      onDelete={() => onDelete(user)}
    />
  ),
});

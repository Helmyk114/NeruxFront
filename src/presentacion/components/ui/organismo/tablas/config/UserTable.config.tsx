import { Chip, ChipProps } from "@heroui/react";
import { ColumnRender } from "./columRenderType";
import { InfoBusiness } from "../../../../../../domain/entities/InfoBusiness";
import { ImgCell } from "../../../atomos/tabla/columnTemplate/ImgCell";
import { CompactCell } from "../../../atomos/tabla/columnTemplate/CompatCell";
import { ActionsCell } from "../../../atomos/tabla/columnTemplate/ActionCell";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Activo: "success",
  paused: "danger",
  vacation: "warning",
  new: "secondary",
};

export const userColumnRender = (
  onEdit: (user: InfoBusiness) => void,
  onView: (user: InfoBusiness) => void,
  onDelete: (user: InfoBusiness) => void
): ColumnRender<InfoBusiness> => ({
  nombre: (user: InfoBusiness) => (
    <ImgCell
      avatar={user.photoBusiness || ""}
      textTop={user.nameBusiness}
      textBotton={user.emailAdmin}
    />
  ),
  administrador: (user: InfoBusiness) => (
    <CompactCell
      textTop={`${user.nameAdmin} ${user.lastNameAdmin}`}
      textBotton={user.phoneAdmin}
    />
  ),
  estado: (user: InfoBusiness) => (
    <Chip
      className={`capitalize border-none gap-1 text-${
        statusColorMap[user.states]
      }`}
      variant="dot"
      color={statusColorMap[user.states]}
    >
      {user.states}
    </Chip>
  ),
  acciones: (user: InfoBusiness) => (
    <ActionsCell
      onEdit={() => onEdit(user)}
      onView={() => onView(user)}
      onDelete={() => onDelete(user)}
    />
  ),
});

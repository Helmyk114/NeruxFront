import { Chip, ChipProps, User } from "@heroui/react";
import { Actions } from "../actions";
import { InfoBusiness } from "../../../../../../domain/entities/InfoBusiness";


const statusColorMap: Record<string, ChipProps['color']> = {
  Activo: "success",
  paused: "danger",
  vacation: "warning",
};

type ColumnRender<T> = {
  [key: string]: (item: T) => JSX.Element;
};

export const userColumnRender: ColumnRender<InfoBusiness> = {
  nombre: (user: InfoBusiness) => (
    <User
      avatarProps={{ radius: "lg", src: user.photoBusiness || undefined }}
      description={user.emailAdmin}
      name={user.nameBusiness}
    />
  ),
  administrador: (user: InfoBusiness) => (
    <div className="flex flex-col">
      <p className="text-bold text-small capitalize">{`${user.nameAdmin} ${user.lastNameAdmin}`}</p>
      <p className="text-bold text-tiny capitalize text-default-400">
        {user.phoneAdmin}
      </p>
    </div>
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
  acciones: () => <Actions />,
};

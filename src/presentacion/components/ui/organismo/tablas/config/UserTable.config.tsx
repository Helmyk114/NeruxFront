import { Chip, ChipProps, User } from "@nextui-org/react";
import { Actions } from "../actions";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type ColumnRender = {
  [key: string]: (item: any) => JSX.Element;
};
interface User {
  idUser: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  photo?: string;
  create_in?: Date;
  bussines_id?: string | null | undefined;
  state_id?: number;
  rol_id?: number;
  bank_id?: string | null | undefined;
}

export const userColumnRender: ColumnRender = {
  name: (user: User) => (
    <User
      avatarProps={{ radius: "lg", src: user.photo }}
      description={user.email}
      name={user.name}
    >
      {user.username}
    </User>
  ),
  role: (user: User) => (
    <div className="flex flex-col">
      <p className="text-bold text-small capitalize">{user.rol_id}</p>
      <p className="text-bold text-tiny capitalize text-default-400">
        {user.lastName}
      </p>
    </div>
  ),
  status: (user: User) => (
    <Chip
      className={`capitalize border-none gap-1 text-${
        statusColorMap[user.email]
      }`}
      variant="dot"
      color={statusColorMap[user.email]}
    >
      {user.email}
    </Chip>
  ),
  actions: () => <Actions />,
};

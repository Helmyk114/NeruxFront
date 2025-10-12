import { User } from "./user";

export type Login = {
  token: string;
  redirect: string;
  infoUser: User;
};

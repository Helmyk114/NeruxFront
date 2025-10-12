
import { UserRole } from "@/common/constant/enum";
import { UserState } from "@/common/types";

export type User = {
  id: string;
  username: string;
  has_changed_password: boolean;
  role: UserRole;
  state: UserState;
  token: string;
  business: string | null;
};

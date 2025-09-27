import { UserRole } from "./userRole";
import { UserState } from "./userState";

export type User = {
 id: string;
 username: string;
 has_changed_password: boolean;
 role: UserRole;
 state: UserState;
 token: string;
 business: string | null;
}
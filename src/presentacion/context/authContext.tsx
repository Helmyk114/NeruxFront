import { createContext } from "react";
import { UserAdapter } from "../../domain/adapter/user.adapter";

interface AuthContextProps {
  user: UserAdapter | null;
  setUser: (user: UserAdapter | null) => void;
  hasCompany: "adminWithoutBusiness" | "adminWithBusiness" | "other";
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

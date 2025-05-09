import { ReactNode, useMemo, useState } from "react";
import { AuthContext } from "../context/authContext";
import { UserAdapter } from "../../domain/adapter/user.adapter";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserAdapter | null>(null);

  const hasCompany = useMemo(() => {
    if (user?.role === "Admin") {
      return user?.business ? "adminWithBusiness" : "adminWithoutBusiness";
    }
    return "other";
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, hasCompany, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

import { cookie } from "@/shared/utils/cookies";

export const SessionManager = {
  saveToken(token: string) {
    cookie.set("token", token);
  },
  getToken() {
    return cookie.get("token");
  },
  clearToken() {
    cookie.remove("token");
  },
};

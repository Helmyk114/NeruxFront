import { CookiesUtil } from "@/common/utils";

export const TokenManager = {
  saveToken(token: string) {
    CookiesUtil.set("token", token);
  },
  getToken() {
    return CookiesUtil.get("token");
  },
  clearToken() {
    CookiesUtil.remove("token");
  },
};

import Cookies from "js-cookie";

export const cookie = {
  set: (key: string, value: string, days = 1): void => {
    Cookies.set(key, value, {
      expires: days,
      secure: window.location.protocol === "https:",
      path: "/",
    });
  },

  get: (key: string): string | undefined => Cookies.get(key),

  remove: (key: string): void => Cookies.remove(key, { path: "/" }),

  exists: (key: string): boolean => Boolean(Cookies.get(key)),
};

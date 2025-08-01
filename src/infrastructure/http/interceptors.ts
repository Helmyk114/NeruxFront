import { axiosInstance } from "./axiosInstanse";
import { cookie } from "@/shared";

export const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = cookie.get("token");
      if (token) config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        cookie.remove("token");
      }
      return Promise.reject({
        message: error.response?.data?.message || "Error desconocido",
        status: error.response?.status,
      });
    }
  );
};

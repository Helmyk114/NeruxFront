import { TokenManager } from "../session";
import { axiosInstance } from "./axiosInstancia";

export const AxiosInterceptor = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenManager.getToken();
      if (token) config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        TokenManager.clearToken();
      }
      return Promise.reject({
        message: error.response?.data?.message || "Error desconocido",
        status: error.response?.status,
      });
    }
  );
};

import { cookie } from "@/shared";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = cookie.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
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

// Funciones exportables
export const Axios = {
  get: async <T, P = unknown>(
    url: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await instance.get(url, { ...config, params });
    return response.data;
  },
  post: async <T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await instance.post<T, AxiosResponse<T>, D>(
      url,
      data,
      config
    );
    return response.data;
  },
  put: async <T, D = unknown>(url: string, data: D): Promise<T> => {
    const response = await instance.put(url, data);
    return response.data;
  },
  patch: async <T, D = unknown>(url: string, data: D): Promise<T> => {
    const response = await instance.patch(url, data);
    return response.data;
  },
  delete: async <T>(url: string): Promise<T> => {
    const response = await instance.delete(url);
    return response.data;
  },
};

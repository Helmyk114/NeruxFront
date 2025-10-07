import { axiosInstance } from "./axiosInstanse";
import { AxiosRequestConfig } from "axios";
import { ResponseApi } from "@/shared/types";

export const apiClient = {
  get: async <T, P = unknown>(
    url: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await axiosInstance.get<T>(url, {
      ...config,
      params,
    });
    return response.data;
  },

  post: async <T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await axiosInstance.post<ResponseApi<T>>(
      url,
      data,
      config
    );
    return response.data.data;
  },

  put: async <T, D = unknown>(url: string, data: D): Promise<T> => {
    const response = await axiosInstance.put<ResponseApi<T>>(url, data);
    return response.data.data;
  },

  patch: async <T, D = unknown>(url: string, data: D): Promise<T> => {
    const response = await axiosInstance.patch<ResponseApi<T>>(url, data);
    return response.data.data;
  },

  delete: async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.delete<ResponseApi<T>>(url);
    return response.data.data;
  },
};

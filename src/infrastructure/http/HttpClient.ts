import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { cookie } from "../../shared/utils/cookies";

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 10000, // 10 segundos
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    this.setupInterceptor();
  }

  //Interceptores
  private setupInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = cookie.get("token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          cookie.remove("token");
          //window.location.replace("/");
        }
        return Promise.reject({
          message: error.response?.data?.message || "Error desconocido",
          status: error.response?.status,
        });
      }
    );
  }

  //Metods http basicos
  public async get<T, P>(
    url: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const respuesta = await this.axiosInstance.get(url, { ...config, params });
    return respuesta.data;
  }

  public async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.post<T, AxiosResponse<T>, D>(
      url,
      data,
      config
    );
    return response.data;
  }

  public async put<T, D>(url: string, data: D): Promise<T> {
    const respuesta = await this.axiosInstance.put(url, data);
    return respuesta.data;
  }

  public async patch<T, D>(url: string, data: D): Promise<T> {
    const respuesta = await this.axiosInstance.patch(url, data);
    return respuesta.data;
  }

  public async delete<T>(url: string): Promise<T> {
    const respuesta = await this.axiosInstance.delete(url);
    return respuesta.data;
  }
}

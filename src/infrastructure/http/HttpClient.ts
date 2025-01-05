import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  //Metods http basicos
  public async get<T>(url: string): Promise<T> {
    const respuesta = await this.axiosInstance.get(url);
    return respuesta.data;
  }

  public async getWithParams<T>(url: string, params: string): Promise<T> {
    const respuesta = await this.axiosInstance.get(url, { params });
    return respuesta.data;
  }

  public async post<T, D>(url: string, data: D): Promise<T> {
    const resultado = await this.axiosInstance.post(url, data);
    return resultado.data;
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

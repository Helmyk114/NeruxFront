import { HttpClient } from "./HttpClient";

const api =  import.meta.env.VITE_API_URL;

export const apiClient = new HttpClient(api);

import { UserRole } from "@/domain/interface";

  export interface AuthResponse {
    token: string;
    user: UserApi;
  }

  export interface UserApi {
    idUser: string;
    has_changed_password: boolean;
    business: string | null;
    state: number;
    role: number;
  }

  export interface User {
    idUser: string;
    has_changed_password: boolean;
    business: string | null;
    state: string;
    role: UserRole;
  }

  export type State = 'Activo' | 'Inactivo' | 'Suspendido';

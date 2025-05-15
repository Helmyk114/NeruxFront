export interface AuthResponse {
  token: string;
  user: User;
}

export interface User {
  idUser: string;
  has_changed_password: number;
  business: string | null;
  state: number;
  role: number | string;
}

export type Rol = 'SuperAdmin' | 'Admin' | 'empleado'; 

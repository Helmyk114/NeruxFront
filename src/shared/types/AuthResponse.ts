export interface AuthResponse {
  token: string;
  user: User;
}

export interface User {
  idUser: string;
  username: string;
  has_changed_password: number;
  business: string;
  state: number;
  role: number;
}

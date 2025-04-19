
export interface AuthResponse{
  token: string;
  user: {
    idUser: string;
    username: string;
    has_changed_password: number;
    business: string;
    state: number;
  }
}
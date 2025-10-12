export type LoginApi = {
  token: string;
  user: {
    id: string;
    username: string;
    role: string;
    has_changed_password: boolean;
    business: string | null;
    state: string;
  };
};
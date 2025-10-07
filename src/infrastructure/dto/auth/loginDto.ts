export type LoginRes = {
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

export type LoginReq = {
  username: string;
  password: string;
}

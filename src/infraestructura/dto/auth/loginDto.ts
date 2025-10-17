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

export type ValidateOtpApi = {
  data: boolean;
}

export type LoginReq = {
  username: string;
  password: string;
};

export type ForgetPasswordReq = {
  email: string;
};

export type ValidateOtpReq = {
  code: string;
  email: string;
};

export type NewPasswordReq = {
  newPassword: string;
  confirmPassword: string;
  email?: string;
};
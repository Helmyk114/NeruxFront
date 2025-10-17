export type NewPasswordCommand = {
  newPassword: string;
  confirmPassword: string;
  email?: string;
};
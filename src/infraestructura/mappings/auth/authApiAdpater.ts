import {
  ForgetPasswordReq,
  LoginReq,
  NewPasswordReq,
  ValidateOtpReq,
} from "@/infraestructura/dto";
import {
  ForgetPasswordCommand,
  LoginCommand,
  NewPasswordCommand,
  ValidateOtpCommand,
} from "@/presentation/models";


export const AuthApiAdapter = {
  toApiLogin(ui: LoginCommand): LoginReq {
    return {
      username: ui.username,
      password: ui.password,
    };
  },

  toApiForgetPassword(ui: ForgetPasswordCommand): ForgetPasswordReq {
    return {
      email: ui.email,
    };
  },

  toApiValidateOtp(ui: ValidateOtpCommand): ValidateOtpReq {
    return {
      email: ui.email,
      code: ui.code,
    };
  },

  toApiNewPassword(ui: NewPasswordCommand): NewPasswordReq {
    return {
      newPassword: ui.newPassword,
      confirmPassword: ui.confirmPassword,
      email: ui.email,
    };
  },
};

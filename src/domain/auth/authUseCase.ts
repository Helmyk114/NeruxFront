// import { cookie, mapUser, User } from "@/shared";
// import { userStore } from "@/store";

import { AuthServices } from "@/infrastructure/services/auth/Auth.service";

export const authUseCase = {
  // login: async (credential: {
  //   username: string;
  //   password: string;
  // }): Promise<{
  //   token: string;
  //   redirect: string;
  //   infoUser: User;
  // }> => {
  //   if (!credential.username || !credential.password) {
  //     throw new Error("El nombre de usuario y la contraseña son obligatorios");
  //   }

  //   const userData = await AuthServices.login(credential);

  //   cookie.set("token", userData.token);
  //   const user = mapUser(userData.user);
  //   userStore.getState().setUser(user);

  //   return {
  //     token: userData.token,
  //     redirect: RedirectPath(user),
  //     infoUser: user,
  //   };
  // },

  forgetPassword: async (email: { email: string }): Promise<void> => {
    if (!email.email) {
      throw new Error("El correo electrónico es obligatorio");
    }
    try {
      await AuthServices.forgetPassword(email.email);
    } catch (error) {
      throw new Error(`Error al enviar el correo ${error}`);
    }
  },

  validateOtp: async (otpData: {
    otp: string;
    email: string;
  }): Promise<boolean> => {
    if (!otpData.otp) {
      throw new Error("El código OTP es obligatorio");
    }
    try {
      const isValid = await AuthServices.validateOtp(
        otpData.otp,
        otpData.email
      );
      return isValid;
    } catch (error) {
      throw new Error(`Error al validar el OTP ${error}`);
    }
  },

  newPassword: async (
    newPassword: string,
    confirmPassword: string,
    email?: string
  ): Promise<void> => {
    if (!newPassword || !confirmPassword) {
      throw new Error("La contraseña y la confirmación son obligatorias");
    }
    try {
      await AuthServices.newPassword(newPassword, confirmPassword, email);
    } catch (error) {
      throw new Error(`Error al cambiar la contraseña ${error}`);
    }
  },
};

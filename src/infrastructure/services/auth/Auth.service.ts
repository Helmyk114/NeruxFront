// import { AuthResponse } from "../../../shared/types/AuthResponseTypes";
// import { cookie } from "../../../shared/utils/cookies";
// import { NavigateFunction } from "react-router-dom";
// import { userStore } from "../../../store/userStore";
// import { themeStore } from "../../../store/themeSotre";
// import { apiClient } from "@/infrastructure/http/ApiClient";

// export const AuthServices = {
//   login: async (credential: {
//     username: string;
//     password: string;
//   }): Promise<AuthResponse> => {
//     try {
//       const authData = await apiClient.post<AuthResponse>("/login", credential);
//       return authData;
//     } catch (error: unknown) {
//       if (error && typeof error === "object" && "message" in error) {
//         throw new Error(error.message as string);
//       }
//       throw new Error("Error durante el login");
//     }
//   },

//   logout: async (navigate: NavigateFunction): Promise<void> => {
//     cookie.remove("token");
//     userStore.getState().clearUser();
//     themeStore.getState().setTheme("dark");
//     navigate("/", { replace: true });
//   },

//   forgetPassword: async (email: string): Promise<void> => {
//     try {
//       await apiClient.post("/forget/password", { email });
//     } catch (error) {
//       console.error("Error al enviar el correo", error);
//       throw new Error("Error al enviar el correo");
//     }
//   },

//   validateOtp: async (code: string, email: string): Promise<boolean> => {
//     try {
//       const response = await apiClient.post<boolean>("/validate", {
//         code,
//         email,
//       });
//       return response;
//     } catch (error) {
//       console.error("Error al validar el OTP", error);
//       throw new Error("Error al validar el OTP");
//     }
//   },

//   newPassword: async (
//     newPassword: string,
//     confirmPassword: string,
//     email?: string
//   ): Promise<void> => {
//     try {
//       if (!email) {
//         await apiClient.patch("/first/password", {
//           newPassword,
//           confirmPassword,
//         });
//       } else {
//         await apiClient.patch("/reset/password", {
//           newPassword,
//           confirmPassword,
//           email,
//         });
//       }
//     } catch (error) {
//       console.error("Error al cambiarla contraseña", error);
//       throw new Error("Error al cambiar la contraseña");
//     }
//   },
// };

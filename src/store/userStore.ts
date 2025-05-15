import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../shared/types/AuthResponseTypes";

type UserState = {
  user: User | null,
  setUser: (user: User) => void,
  clearUser: () => void
};

export const userStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null })
    }),
    {
      name: 'user-storage',
    }
  )
)
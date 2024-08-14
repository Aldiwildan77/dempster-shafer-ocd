import type { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { MMKV } from "react-native-mmkv";
import { create } from "zustand";
import { StateStorage, persist } from "zustand/middleware";

const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

type UserStore = {
  user?: FirebaseAuthTypes.User;
  setUser: (user: FirebaseAuthTypes.User) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user",
      getStorage: () => zustandStorage,
    }
  )
);

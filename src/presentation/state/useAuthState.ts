import { create } from "zustand";
import type { AuthState } from "./types/AuthState";


const useAuthState = create<AuthState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useAuthState;

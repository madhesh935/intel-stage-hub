import { create } from "zustand";

export type Role = "freelancer" | "client" | "both";
type AuthState = {
  email: string | null;
  role: Role;
  setEmail: (e: string) => void;
  setRole: (r: Role) => void;
};

export const useAuth = create<AuthState>((set) => ({
  email: "alex@talentstage.io",
  role: "freelancer",
  setEmail: (email) => set({ email }),
  setRole: (role) => set({ role }),
}));

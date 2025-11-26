import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../Apis/mockApi";

interface User {
  id: string;
  nome: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  loginUser: (email: string, senha: string) => Promise<void>;
  cadastrarUser: (nome: string, sobrenome: string, email: string, senha: string) => Promise<User>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const saved = await AsyncStorage.getItem("@user");
      if (saved) setUser(JSON.parse(saved));
    } catch (err) {
      console.log("Erro ao carregar usuário:", err);
    } finally {
      setLoading(false);
    }
  }

  async function cadastrarUser(nome: string, sobrenome: string, email: string, senha: string) {
    try {
      const res = await api.post("/users", { nome, sobrenome, email, senha });
      const newUser: User = res.data;
      setUser(newUser);
      await AsyncStorage.setItem("@user", JSON.stringify(newUser));
      return newUser;
    } catch (err) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }

  async function loginUser(email: string, senha: string) {
    try {
      const res = await api.get("/users");
      const users: User[] = res.data;

      const found = users.find(
        (u: any) => u.email === email && (u as any).senha === senha
      );
      if (!found) throw new Error("Email ou senha inválidos");

      setUser(found);
      await AsyncStorage.setItem("@user", JSON.stringify(found));
    } catch (err: any) {
      throw new Error(err.message || "Erro ao fazer login");
    }
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem("@user");
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, loginUser, cadastrarUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
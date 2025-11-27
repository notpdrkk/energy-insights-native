import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  nome: string;
  sobrenome: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  loginUser: (email: string, senha: string) => Promise<void>;
  cadastrarUser: (nome: string, sobrenome: string, email: string, senha: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
  children: ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const storedUser = await AsyncStorage.getItem("@user");
    if (storedUser) setUser(JSON.parse(storedUser));
  };

  const loginUser = async (email: string, senha: string) => {
    // Aqui você poderia fazer API real
    if (email && senha) {
      const fakeUser: User = { nome: "John", sobrenome: "Doe", email };
      setUser(fakeUser);
      await AsyncStorage.setItem("@user", JSON.stringify(fakeUser));
    } else {
      throw new Error("Email ou senha inválidos");
    }
  };

  const cadastrarUser = async (nome: string, sobrenome: string, email: string, senha: string) => {
    if (!nome || !sobrenome || !email || !senha) return false;
    const newUser: User = { nome, sobrenome, email };
    setUser(newUser);
    await AsyncStorage.setItem("@user", JSON.stringify(newUser));
    return true;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("@user");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, cadastrarUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

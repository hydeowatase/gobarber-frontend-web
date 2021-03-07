import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface IAuthState {
  token: string;
  userWithoutPassword: object;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: object;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem("@GoBarber:token");
    const userWithoutPassword = localStorage.getItem(
      "@GoBarber:userWithoutPassword"
    );

    if (token && userWithoutPassword) {
      return { token, userWithoutPassword: JSON.parse(userWithoutPassword) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { token, userWithoutPassword } = response.data;

    localStorage.setItem("@GoBarber:token", token);
    localStorage.setItem(
      "@GoBarber:userWithoutPassword",
      JSON.stringify(userWithoutPassword)
    );

    setData({ token, userWithoutPassword });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@GoBarber:token");
    localStorage.removeItem("@GoBarber:userWithoutPassword");

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.userWithoutPassword, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };

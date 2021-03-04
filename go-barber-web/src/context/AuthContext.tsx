import React, { createContext, useCallback, useState } from "react";
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
  userWithoutPassword: object;
  signIn(credentials: ISignInCredentials): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem("@GoBarber:token");
    const userWithoutPassword = localStorage.getItem("@GoBarber:userWithoutPassword");

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
    localStorage.setItem("@GoBarber:userWithoutPassword", JSON.stringify(userWithoutPassword));

    setData({ token, userWithoutPassword });
  }, []);

  return (
    <AuthContext.Provider value={{ userWithoutPassword: data.userWithoutPassword, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

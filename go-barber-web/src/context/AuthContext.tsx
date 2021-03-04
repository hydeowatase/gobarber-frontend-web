import React, { createContext, useCallback } from "react";

interface IAuthContext {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log("signIn");
  }, []);

  return (
    <AuthContext.Provider value={{ name: "Hydeo", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

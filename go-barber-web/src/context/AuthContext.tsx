import React, { createContext } from "react";

interface IAuthContext {
  name: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "Hydeo" }}>
      {children}
    </AuthContext.Provider>
  );
};

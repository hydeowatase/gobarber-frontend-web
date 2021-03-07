import React from "react";
import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";

const AppProviders: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </AuthProvider>
    </>
  );
}

export default AppProviders;

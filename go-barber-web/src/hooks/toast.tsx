import React, { createContext, useCallback, useState, useContext } from "react";

import ToastContainer from "../components/ToastContainer/Index";

interface IToastConextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<IToastConextData>({} as IToastConextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast();');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast();');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

function useToast(): IToastConextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider.');
  }

  return context;
}

export { ToastProvider, useToast }

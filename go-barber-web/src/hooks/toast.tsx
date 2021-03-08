import React, { createContext, useCallback, useState, useContext } from "react";
import { v4 as uuid } from "uuid";

import ToastContainer from "../components/ToastContainer/Index";

export interface IToastMessage {
  id: string;
  type: "success" | "error" | "info";
  title: string;
  description: string;
}

interface IToastConextData {
  addToast(message: Omit<IToastMessage, "id">): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<IToastConextData>({} as IToastConextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToastMessage, "id">) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      //poderia ser passado como valor inicial do array messages na chaves abaixo.
      setMessages((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): IToastConextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }

  return context;
}

export { ToastProvider, useToast };

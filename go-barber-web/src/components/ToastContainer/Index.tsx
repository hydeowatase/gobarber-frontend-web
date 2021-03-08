import React from "react";

import Toast from "./Toast";

import { IToastMessage } from "../../hooks/toast";
import { Container } from "./styles";

interface IToastCotainerProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastCotainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;

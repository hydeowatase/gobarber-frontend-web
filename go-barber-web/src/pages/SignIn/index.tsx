import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input/index";
import Button from "../../components/Button/index";

import { Container, Content, Backgound } from "./styles";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber-logo" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="senha" icon={FiLock} type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="#">Esqueci minha senha</a>
      </form>
      <a href="#">
        <FiLogIn /> Criar conta
      </a>
    </Content>
    <Backgound />
  </Container>
);

export default SignIn;

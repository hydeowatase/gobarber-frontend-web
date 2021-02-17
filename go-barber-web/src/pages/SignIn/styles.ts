import styled from "styled-components";
import signInBackground from "../../assets/sign-in-background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  aligh-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  aligh-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form{
    margin: 80px 0;
    width: 340px;
    text-aligh; center;
  }
`;

export const Backgound = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;

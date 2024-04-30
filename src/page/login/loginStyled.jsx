import styled from "styled-components";
import { Button } from "antd";

export const BG = styled.div`
  background-image: url('https://images.unsplash.com/photo-1521109464564-2fa2faa95858?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center bottom;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    height: 100vh;
    overflow: hidden; 
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginBox = styled.div`
  display: block;
  justify-content: center;
  width: 500px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;

  @media only screen and (max-width: 576px) {
    width: 350px;
    height: 400px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  display: flex;
  justify-content: center;
`;

export const LogoStyled = styled.div`
  width: 100%;
  height: 100px;
  background-color: #153250;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
`;

export const Button1 = styled(Button)`
  background-color: #153250;

  @media only screen and (max-width: 576px) {
    margin-left: -150px;
  }
`;

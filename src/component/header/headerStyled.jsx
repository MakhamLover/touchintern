import styled from 'styled-components';
export const Headercustom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: #ffffff; 
  color: #000000; 
  font-weight: bold;
  font-size: 16px;
  font-family: 'Prompt';
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow:0 0 5px #000000;
  z-index: 0;
  @media only screen and (max-width: 576px) {
   justify-content:space-around;
  }
`;
export const H1 = styled.h1`
  margin-left: 120px;
  font-size: 20px;
  @media only screen and (max-width: 576px) {
   display: none;
  }
`;
export const User = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  @media only screen and (max-width: 576px) {
   display: none;
  }
`;
export const Openbtn = styled.button`
  display: block;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align:center;
  padding-bottom: 10px;
  padding-top: 10px;
  border: none;
  background-color: #ffffff;
  font-size: 30px;
`;
export const Logo = styled.img`
  width: 50px;
  height: 45px;
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 576px) {
    display: flex;
  }
`;
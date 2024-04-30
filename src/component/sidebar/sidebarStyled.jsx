import styled from "styled-components";
import { DashboardOutlined } from "@ant-design/icons";

export const Sidebarcustom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  background-color: #153250;
  color: #000000;
  font-weight: bold;
  font-size: 16px;
  font-family: "Prompt";
  display: block;
  z-index: 1;
  border-radius: 0 50px 0 0;
  justify-content: center;
  color: #ffffff;
  text-align: center;

  @media only screen and (max-width: 576px) {
    height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow:hidden;
  transition: 0.5s;
  padding-top: 60px;
  }
`;
export const Dashboard = styled.div`
  display: block;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align:center;
  padding-bottom: 10px;
  padding-top: 10px;
`;
export const DashboardHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #e55b5b;
  }
`;
export const Logo = styled.img`
  width: 50px;
  height: 45px;
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
`;
export const CustomDashboardIcon = styled(DashboardOutlined)`
  color: #ffffff;
  font-size: 20px;
`;

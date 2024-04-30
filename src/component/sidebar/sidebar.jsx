import React from 'react'
import { Dashboard,
  Sidebarcustom,
  Logo,
  CustomDashboardIcon,
  DashboardHover
 } from './sidebarStyled'

import logo from "../../images/png/logo.png";
import { useNavigate } from "react-router-dom";


export default function Sidebar() {
const navigate = useNavigate();
const handleClick = () => {
  navigate('/dashboard'); 
};
const clickHome = () => {
  navigate('/home'); 
  
};
  return (
     <Sidebarcustom>
        <Logo src={logo} onClick={clickHome}></Logo>
        <DashboardHover onClick={handleClick}>
        <Dashboard >  
        <CustomDashboardIcon />
        <span>Dashboard</span>
        </Dashboard>
        </DashboardHover>
      </Sidebarcustom>
  )
}

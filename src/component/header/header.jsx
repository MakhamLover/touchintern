import React, { useState } from 'react';
import { Headercustom, H1, User, Openbtn, Logo } from './headerStyled';
import { SettingOutlined, BellOutlined, UserOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../../images/png/logo.png";
import Toggle from '../togglesidebar/toggleSidebar';

export default function Header() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const clickLogout = () => {
    navigate('/');
  };

  const clickHome = () => {
    navigate('/home');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log('Toggle sidebar'); 
  };

  return (
    <Headercustom>
      <Openbtn onClick={toggleSidebar}>☰</Openbtn>
      <div style={{ display: 'flex', justifyContent: 'center', width: '400px' }}>
        <Logo src={logo} onClick={clickHome} />
      </div>
      <H1>Home</H1>
      <User>
        <span><SettingOutlined /></span>
        <span><BellOutlined /></span>
        <span><UserOutlined /></span>
        <span>User Name</span>
        <span><CaretDownOutlined onClick={clickLogout} /></span>
      </User>
      {isSidebarOpen && <Toggle />}
    </Headercustom>
  );
}

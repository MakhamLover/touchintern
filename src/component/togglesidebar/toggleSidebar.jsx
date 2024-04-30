import React from 'react'
import { Sidebarcustom,
  Dashboard,
  DashboardHover,
  CustomDashboardIcon
 } from './toggleStyled.jsx'


import { useNavigate } from "react-router-dom";


export default function Toggle() {
const navigate = useNavigate();
const handleClick = () => {
  navigate('/dashboard'); 
};

  return (
     <Sidebarcustom>
        <DashboardHover onClick={handleClick}>
        <Dashboard >  
        <CustomDashboardIcon />
        <span>Dashboard</span>
        </Dashboard>
        </DashboardHover>
      </Sidebarcustom>
  )
}
// import React, { useState } from 'react';

// function Toggle() {
//   const [sidebarWidth, setSidebarWidth] = useState(0);
//   const [mainMarginLeft, setMainMarginLeft] = useState(0);

//   const openNav = () => {
//     setSidebarWidth(550);
//     setMainMarginLeft(250);
//   };

//   const closeNav = () => {
//     setSidebarWidth(0);
//     setMainMarginLeft(0);
//   };

//   return (
//     <div>
//       {/* Button to open the sidebar */}
//       <button onClick={openNav}>Open Sidebar</button>

//       {/* Sidebar */}
//       <div id="mySidebar" style={{ width: `${sidebarWidth}px` }}>
//         {/* Sidebar content here */}
//       </div>

//       {/* Main content */}
//       <div id="main" style={{ marginLeft: `${mainMarginLeft}px` }}>
//         {/* Your main content here */}
//       </div>
//     </div>
//   );
// }

// export default Toggle;
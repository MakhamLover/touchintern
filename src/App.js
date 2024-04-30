import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/header.jsx";
import Sidebar from "./component/sidebar/sidebar.jsx";
import Home from "./page/home/home.jsx";
import Dashboardmonitoring from "./page/dashboardmonitoring/dashboardmonitoring.jsx";
import Login from "./page/login/login.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/dashboard" element={<DashboardmonitoringLayout />} />
      </Routes>
    </Router>
  );
}
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
}
function HomeLayout() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
function DashboardmonitoringLayout() {
  return (
    <MainLayout>
      <Dashboardmonitoring />
    </MainLayout>
  );
}
// 5555555
export default App;

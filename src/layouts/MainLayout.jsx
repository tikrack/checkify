import { Outlet } from "react-router";
import Header from "../components/layout/Header.jsx";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;

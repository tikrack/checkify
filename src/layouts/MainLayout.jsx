import { Outlet } from "react-router";
import Header from "../components/layout/Header.jsx";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;

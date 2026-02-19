import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import HomeTemplate from "./templates/HomeTemplate.jsx";
import UserListPage from "./modules/users/page/UserListPage";
import UserCreatePage from "./modules/users/page/UserCreatePage";
import CheckIssuePage from "./modules/checks/pages/CheckIssuePage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomeTemplate />} />
            <Route path={"users"}>
              <Route index element={<UserListPage />} />
              <Route path={"create"} element={<UserCreatePage />} />
            </Route>
            <Route path={"checks"}>
              <Route path={"issue"} element={<CheckIssuePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

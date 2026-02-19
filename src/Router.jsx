import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import HomeTemplate from "./templates/HomeTemplate.jsx";
import CheckIssueTemplate from "./templates/CheckIssueTemplate.jsx";
import {useEffect} from "react";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomeTemplate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

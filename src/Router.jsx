import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import HomeTemplate from "./templates/HomeTemplate.jsx";
import UserListPage from "./modules/users/page/UserListPage";

const Router = () => {
    return (<>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<HomeTemplate/>}/>
                        <Route path={"users"}>
                            <Route index element={<UserListPage/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>);
};

export default Router;

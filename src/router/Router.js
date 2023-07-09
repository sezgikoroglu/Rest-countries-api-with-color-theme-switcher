import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Detail from "../pages/Detail";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="/country/:code" element={<Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
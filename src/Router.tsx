import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Details from "./components/pages/details/Details";
import Header from "./components/ui/header/Header";

const Router: FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route index path="/details/:country" element={<Details />} />
            </Routes>
        </>
    );
};

export default Router;

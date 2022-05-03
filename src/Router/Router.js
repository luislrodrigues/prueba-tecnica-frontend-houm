import React from "react";
import { Route, Routes } from "react-router-dom";
import Rickpage from "../Pages/RickPage";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Rickpage />} />
        </Routes>
    );
}

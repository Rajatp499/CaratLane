import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home"
import Ring from "./pages/Ring";
import Earrings from "./pages/Earrings";
import BraceletBangles from "./pages/BraceletBangles";
import { Route,Routes } from "react-router";
const App = () => {
    return (
        <div>
            <Navbar />
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="rings" element={<Ring/>} />
                <Route path="earrings" element={<Earrings/>} />
                <Route path = "bangles-bracelet" element={<BraceletBangles/>}/>
            </Routes>
        </div>
    );
};

export default App;

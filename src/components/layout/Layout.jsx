import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar/Navbar";

const Layout = () => {
    return (
        <div className="container mx-auto">
            <Navbar/>
            <h1>this layout</h1>
            <Outlet/>
        </div>
    );
};

export default Layout;
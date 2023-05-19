import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const LayoutWithoutBanner = () => {
    return (
        <div className="font-tl-font">
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default LayoutWithoutBanner;
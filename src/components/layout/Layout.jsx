import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const Layout = () => {
    return (
        <div >
            <div className="font-tl-font">
                <Navbar />
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
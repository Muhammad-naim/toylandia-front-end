import {  useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState()
    return (
            <div className="sticky top-0  backdrop-blur-sm bg-opacity-80 w-full z-10 ">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/'}>Toys</Link></li>
                            <li><Link to={'/'}>Add toy</Link></li>
                            <li><Link to={'/'}>My toys</Link></li>
                            <li><Link to={'/'}>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link className="font-bold normal-case text-2xl" to={'/'}>Toylandia</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>Toys</Link></li>
                        <li><Link to={'/'}>Add toy</Link></li>
                        <li><Link to={'/'}>My toys</Link></li>
                        <li><Link to={'/'}>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <img src={'Photo.com'} alt="user" className="h-4 w-4 rounded-full" />
                            <button className="btn btn-ghost btn-sm">Logout</button>
                        </> :
                            <Link to={'/login'} className="btn btn-ghost btn-sm bg-[#95B3E0] hover:bg-[#F379A7]">Login</Link>
                    }
                    
                </div>
            </div>
            {/* <img className="-translate-y-3 z-40" src="https://htmldemo.net/kidol/kidol/assets/img/photos/1.png"  /> */}
        </div>
    );
};

export default Navbar;
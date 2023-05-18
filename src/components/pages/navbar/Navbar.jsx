import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
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
                   <img src={'Photo.com'} alt="user" className="h-4 w-4 rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
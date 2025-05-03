
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';

const Navbar = () => {
    const { activeUser } = useContext(AuthContext);
    console.log(activeUser);
    const links = [
        <li><NavLink to="/">Home</NavLink></li>,
        <li><a>All Sports Equipment</a></li>,
        <li><a>Add Equipment</a></li>,
        <li><a>My Equipment List</a></li>
    ]

    return (
        <div className="navbar w-full shadow-lg bg-red-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-xl tracking-widest uppercase font-bold p-1 rounded hover:shadow-2xl">Equi<span className='text-red-600'>Sports</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {activeUser?.email ? <>
                    <p>{activeUser?.email}</p>
                    <Link to="/register" className="btn btn-error">Sign Out</Link>
                </>
                    : <>
                        <Link to="/register" className="btn">Register</Link>
                        <Link to="/signIn" className="btn">Sign In</Link>
                    </>}
                {/* <Link to="/register" className="btn">Register</Link>
                <Link to="/signIn" className="btn">Sign In</Link>
                <p>{activeUser?.email}</p> */}
            </div>
        </div>
    );
};

export default Navbar;
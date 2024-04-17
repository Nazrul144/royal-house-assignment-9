import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';
import userDefault from '../assets/user.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                alert('Successfully logged out!')
                
            })
            .catch(error => {
                console.log(error)
            })
    }
    const navLinks = <>
        <li className='font-bold font-poppins'><NavLink to='/' className={({ isActive }) => isActive ? 'border-2 border-orange-300 rounded-r-lg' : ''}>Home</NavLink></li>
        <li className='font-bold  font-poppins'><NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'border-2 border-orange-300 rounded-r-lg' : ''}>UpdateProfile</NavLink></li>
        <li className='font-bold  font-poppins'><NavLink to='/userProfile' className={({ isActive }) => isActive ? 'border-2 border-orange-300 rounded-r-lg' : ''}>UserProfile</NavLink></li>
        <li className='font-bold  font-poppins'><NavLink to='/regalHouse' className={({ isActive }) => isActive ? 'border-2 border-orange-300 rounded-r-lg' : ''}>Regal House</NavLink></li>
        <li className='font-bold  font-poppins'><NavLink to='/register' className={({ isActive }) => isActive ? 'border-2 border-orange-300 rounded-r-lg' : ''}>Register</NavLink></li>

    </>
    console.log(user?.photoURL);
    console.log("User object:", user);

    return (
        <div>
            <div className="navbar bg-base-100 z-100">
                <div className="navbar-start z-100">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost lg:text-2xl font-bold font-poppins"> <span className='text-yellow-500' >REGAL</span> <span className='text-sky-400'>HOUSE</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onMouseEnter={() => setShowName(true)}
                                onMouseLeave={() => setShowName(false)}>
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            {showName && <span className="tooltip tooltip-open tooltip-bottom" data-tip= {user.displayName} ></span>}
                            {/* <span >{user?.email}</span> */}
                            <a onClick={handleLogOut} className="btn">Logout</a>

                        </> :
                            <Link to='/login'><button className='rounded-lg bg-slate-300 p-2 font-bold'>Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
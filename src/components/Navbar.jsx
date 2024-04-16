import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Navbar = () => {

     const {user, logOut} = useContext(AuthContext);

     const handleLogOut = () =>{
        logOut()
        .then(result =>{
            console.log('Loge out successfully!')
        })
        .catch(error => {
            console.log(error)
        })
     }
    const navLinks = <>
        <li><NavLink to='/' className={({isActive})=> isActive? 'border-2 border-orange-300 rounded-r-lg': ''}>Home</NavLink></li>
        <li><NavLink to='/updateProfile' className={({isActive})=> isActive? 'border-2 border-orange-300 rounded-r-lg': ''}>UpdateProfile</NavLink></li>
        <li><NavLink to='/register' className={({isActive})=> isActive? 'border-2 border-orange-300 rounded-r-lg': ''}>Register</NavLink></li>
        <li><NavLink to='/blog' className={({isActive})=> isActive? 'border-2 border-orange-300 rounded-r-lg': ''}>Blog</NavLink></li>
        <li><NavLink to='/regalHouse' className={({isActive})=> isActive? 'border-2 border-orange-300 rounded-r-lg': ''}>Regal House</NavLink></li>

    </>
    console.log(user?.photoURL);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Regal House</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                        <span>{user?.email}</span>
                        <span><img src={user?.photoURL} alt="" /></span>
                        <a onClick={handleLogOut} className="btn">Sign out</a>
                        </> :
                        <Link to='/login'><button className='rounded-lg bg-slate-300 p-2 font-bold'>Login</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';

const Root = () => {
    return (
        <div className='w-2/3 mx-auto bg-gradient-to-r from-indigo-100 cyan-500 via-purple-100 to-pink-100'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
      
    );
    
};

export default Root;
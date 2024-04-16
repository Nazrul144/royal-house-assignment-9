import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className='w-2/3 mx-auto border-2 border-x-green-500'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
      
    );
    
};

export default Root;
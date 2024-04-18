import React, { useContext, useEffect } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);
       useEffect(()=>{
        AOS.init();
    },[])

  
    const { displayName, photoURL, email } = user || {};
    if (loading) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-md "></span>
        </div>
    }
 
    return (
        <div className='bg-gradient-to-r from-indigo-100 cyan-500 via-purple-100 to-pink-100'>
            <Helmet>
                <title>Regal House | UserProfile</title>
            </Helmet>

            <div className='grid grid-cols-10 gap-4 mt-44 ml-4 lg:mt-16'>
                <div className='col-span-2'>
                    <img data-aos="fade-up" data-aos-duration='1000' src={photoURL} alt="" />
                    <div className="px-2 py-4">
                        <div className="font-bold text-xl mb-2">{displayName}</div>
                        <p className="text-gray-700 text-base">{email}</p>
                    </div>
                </div>
                <div  className='col-span-8 '>
                    <h1  className=' text-red-500 text-xl lg:text-4xl font-bold text-center mt-6 animate__animated animate__bounce'>Welcome! Nazrul Islam</h1>
                    <p className="lg:py-6 lg:px-8 font-poppins font-medium text-xl text-justify mt-24 animate__animated animate__backInUp "> Hi, I am Nazrul Islam. I am running 26. I am from aristocratic muslim family. I am doing BSC on the
                        department of CSE Computer 'Science and Engineering'. Right now, I am also a student of Programming Hero where I am
                        learning web development. My future plane is that I want to touch the zenith of the success that is to be a world class
                        web developer. Thank you for reading my Bio. </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
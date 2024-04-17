import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);

    console.log(user)
    const { displayName, photoURL, email } = user || {};
    if (loading) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-md "></span>
        </div>
    }
    return (
        <div>
            <Helmet>
                <title>Regal House | UserProfile</title>
            </Helmet>

            <div className='grid grid-cols-10 gap-4 mt-16'>
                <div className='col-span-2'>
                    <img src={photoURL} alt="" />
                    <div className="px-4 py-4">
                        <div className="font-bold text-xl mb-2">{displayName}</div>
                        <p className="text-gray-700 text-base">{email}</p>
                    </div>
                </div>
                <div className='col-span-8'>
                    <h1 className='text-4xl font-bold text-center mt-6'>Welcome! Nazrul Islam</h1>
                    <p className="py-6 px-8 font-poppins font-medium text-xl text-justify mt-10"> Hi, I am Nazrul Islam. I am running 26. I am from aristocratic muslim family. I am doing BSC on the
                        department of CSE Computer 'Science and Engineering'. Right now, I am also a student of Programming Hero where I am
                        learning web development. My future plane is that I want to touch the zenith of the success that is to be a world class
                        web developer. Thank you for reading my Bio. </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
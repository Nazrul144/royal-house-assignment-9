import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ShowCard from './ShowCard';
import Marquee from "react-fast-marquee";
import { string } from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';


const RegalHouse = () => {
    const [regalHouses, setRegalHouses] = useState([])
    useEffect(()=>{
        AOS.init();
    },[])

    useEffect(() => {
        fetch('regalHouse.json')
            .then(res => res.json())
            .then(data => setRegalHouses(data));
    }, [])
    return (
        <div>
            <Helmet>
                <title>Regal House | Regal House</title>
            </Helmet>
            <h1 className='mt-6 text-center text-sky-400 text-xl lg:text-6xl font-bold mb-16'>Welcome to our Regal World House</h1>
            <Marquee className='text-4xl text-blue-400 font-bold' pauseOnHover={true} gradientColor={string}>
                Step into elegance at Regal House, where luxury meets comfort. Explore our exquisite collections, indulge in opulent amenities, and experience the epitome of refined living. Welcome to a world of splendor.
            </Marquee>

            <div data-aos-easing="zoom-in-up" data-aos-duration='1000' className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                {
                    regalHouses.map(regalHouse => <ShowCard key={regalHouse.id} regalHouse={regalHouse}></ShowCard>)
                }
            </div>

        </div>
    );
};

export default RegalHouse;
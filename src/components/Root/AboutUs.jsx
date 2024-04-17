import { string } from 'prop-types';
import React from 'react';
import Marquee from "react-fast-marquee";
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Regal House | About Us</title>
            </Helmet>
            <div className='mt-10'>
            <Marquee className='text-4xl text-blue-400 font-bold' pauseOnHover={true} gradientColor={string}>
                Welcome to Regal House World!
            </Marquee>
            <h3 className='text-xl font-bold text-sky-400 mt-6'>About Regal House</h3>
            <p>
            Welcome to Regal House, where we believe in the timeless elegance of luxury living. Founded with a vision to redefine sophistication in home decor, Regal House is dedicated to curating exquisite collections that elevate your living spaces to new heights of opulence.
            </p>
            <h3 className='text-xl font-bold text-sky-400 mt-6'>Our Story</h3>
            <p>
            Established in [year], Regal House has been a beacon of luxury lifestyle solutions for discerning homeowners, interior designers, and architects alike. Our journey began with a passion for craftsmanship and an unwavering commitment to quality. Over the years, we've cultivated enduring relationships with artisans and designers from around the world, allowing us to bring you the finest selection of furniture, decor, and accessories.
            </p>
            <h3 className='text-xl font-bold text-sky-400 mt-6'>Our Commitment</h3>
            <p>
            Quality is the cornerstone of everything we do. From the materials we source to the craftsmanship behind each piece, we hold ourselves to the highest standards of excellence. We take pride in offering luxury furnishings that not only exude beauty but also stand the test of time.
            </p>
            <h3 className='font-bold text-sky-400 text-xl mt-6'>Discover Luxury, Redefine Elegance</h3>
            <p>
            Whether you're furnishing a lavish estate or adding a touch of refinement to your urban sanctuary, Regal House invites you to explore our curated collections and experience the unparalleled craftsmanship and timeless sophistication that define us.
            </p>
            <small className='font-semibold'>Thank you for choosing Regal House as your partner in luxury living.</small>
            </div>
        </div>
    );
};

export default AboutUs;
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Marquee from "react-fast-marquee";

import { Helmet } from 'react-helmet-async';
import { string } from "prop-types";
const Home = () => {

    const { houses} = useContext(AuthContext);
    console.log(houses)
    return (
        <div>
            <Helmet>
                <title>Regal House | Home</title>
            </Helmet>

            <Marquee className='text-4xl text-blue-400 font-bold' pauseOnHover={true} gradientColor={string}>
                Welcome to Regal House World!
            </Marquee>

            <div className="mt-32 lg:mt-10">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                loop={true}

            >
                <SwiperSlide> <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (1).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">Explore and discover this house, it's one of the beautiful in the world! <span className="text-yellow-500">Price: $2000000</span></h1>
                    
                </div></SwiperSlide>
                <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (2).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">Let's find the beauty of the house, to book this house explore our website. <span className="text-red-500">Price: $2000000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (3).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">Tremendous weather belong to this house. Specially splendid sunrise that you can enjoy.<span className="text-yellow-500">Price: $24000000</span></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (4).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">Is not it awsome? Definitely you will get more pleasure if you live this house. <span className="text-red-400">Price: $2220000</span> </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (5).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">Visit our website and get more and more fabulous house and share it with your friends <span className="text-green-500">Price: $65000000</span></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (6).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">Very lovely house! Perfect place to live with your family. Hope you will enjoy. <span className="text-green-500">Price: $11000000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (7).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">Explore and enjoy our beautiful website. <span className="text-red-400">Price: $97000000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (8).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">To be benefited, it's recommended to discover our website <span className="text-black">Price: $13500000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (9).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">We are here to provide the best service that house service. <span className="text-blue-400">Price: $25000000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house_final.jpeg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-4xl font-bold">Thank you so much to visit our website. Get beautiful house and enjoy.<span className="text-black">Price: $7500000</span></h1>
                </div></SwiperSlide>
            </Swiper>
            </div>
            <div>
                <h1 className="text-center font-bold text-4xl mt-12">Our Service</h1>
            </div>
            <div  data-aos="fade-up" data-aos-duration='1000' className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

                {
                    houses.map(house => <Card key={house.id} house={house}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Home;
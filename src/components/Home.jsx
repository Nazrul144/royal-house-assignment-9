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

    const { houses, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-md "></span>
        </div>
    }
    console.log(houses)
    return (
        <div>
            <Helmet>
                <title>Regal House | Home</title>
            </Helmet>

            <Marquee className='text-4xl text-blue-400 font-bold' pauseOnHover={true} gradientColor={string}>
                Welcome to Regal House World!
            </Marquee>

            <div className="mt-12">
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
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Explore and discover this house, it's one of the beautiful in the world! <span className="text-yellow-500">Price: $2000000</span></h1>
                    
                </div></SwiperSlide>
                <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (2).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Let's find the beauty of the house, to book this house explore our website. <span className="text-red-500">Price: $2000000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (3).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Tremendous weather belong to this house. Specially splendid sunrise that you can enjoy.<span className="text-yellow-500">Price: $24000000</span></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (4).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Is not it awsome? Definitely you will get more pleasure if you live this house. <span className="text-red-400">Price: $2220000</span> </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (5).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Visit our website and get more and more fabulous house and share it with your friends <span className="text-green-500">Price: $65000000</span></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (6).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Very lovely house! Perfect place to live with your family. Hope you will enjoy. <span className="text-green-500">Price: $11000000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (7).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Explore and enjoy our beautiful website. <span className="text-red-400">Price: $97000000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (8).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">To be benefited, it's recommended to discover our website <span className="text-black">Price: $13500000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (9).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">We are here to provide the best service that house service. <span className="text-blue-400">Price: $25000000</span></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house_final.jpeg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Thank you so much to visit our website. Get beautiful house and enjoy.<span className="text-black">Price: $7500000</span></h1>
                </div></SwiperSlide>
            </Swiper>
            </div>
            <div>
                <h1 className="text-center font-bold text-4xl mt-12">Our Service</h1>
            </div>
            <div  data-aos="fade-up" data-aos-duration='1000' className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">

                {
                    houses.map(house => <Card key={house.id} house={house}></Card>)
                }
            </div>
            <footer className="footer footer-center p-10 bg-gray-400 text-base-content rounded mt-12">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Home;
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
import { Link } from "react-router-dom";
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
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Very expensive house and eco-friendly! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                    
                </div></SwiperSlide>
                <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (2).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Royal house for the people! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                </div></SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (3).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Explore this house and enjoy your life! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl  font-bold">Contact us</button></Link>
                        </p></div></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (4).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Tremendous house in the world! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold ">Contact us</button></Link>
                        </p></div> </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/slider/house (5).jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Look like a king place, Explore!. <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold ">Contact us</button></Link>
                        </p></div></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (6).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Lovely house to live with a family!<br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold ">Contact us</button></Link>
                        </p></div></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (7).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    You should definitely visit it! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold ">Contact us</button></Link>
                        </p></div></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (8).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Very beautiful house and eco-friendly! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold ">Contact us</button></Link>
                        </p></div></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house (9).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Gorgeous and mind blowing house! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold ">Contact us</button></Link>
                        </p></div></h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/slider/house_final.jpeg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Don't forget to explore this house! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold ">Contact us</button></Link>
                        </p></div></h1>
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
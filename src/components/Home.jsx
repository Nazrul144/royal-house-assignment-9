import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
    const { houses } = useContext(AuthContext);
    console.log(houses)
    return (
        <div>
            <h1>This is home!</h1>

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

            >
                <SwiperSlide> <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (1).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide1</h1>
                </div></SwiperSlide>
                <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (2).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide2</h1>
                </div></SwiperSlide>
                <SwiperSlide>
                <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (3).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide3</h1>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (4).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide4</h1>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (5).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide5</h1>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (6).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide6</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (7).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide7</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (8).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide8</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house (9).jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide9</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/slider/house_final.jpeg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Slide10</h1>
                </div></SwiperSlide>
            </Swiper>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    houses.map(house => <Card key={house.id} house={house}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;
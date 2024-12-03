import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import Image1 from "../assets/Products/Image1.png"
import Image3 from "../assets/Products/Image3.png"
import Image4 from "../assets/Products/Image4.png"
import Image5 from "../assets/Products/Image5.png"
import Image6 from "../assets/Products/Image6.png"
import Image7 from "../assets/Products/Image7.png"
import Image8 from "../assets/Products/Image8.png"
import Image9 from "../assets/Products/Image9.png"
import Image10 from "../assets/Products/Image10.png"
import Image11 from "../assets/Products/Image11.png"

export default function App() {
    const[items,setItems]=useState(3);
    useEffect(()=>{
        if(window.innerWidth<=640)
        {
            setItems(2);
        }
        else if(window.innerWidth>640)
        {
            setItems(3);
        }
    },[window.innerWidth]);

    return (
        <>
            <div className="mx-6 sm:mx-10 lg:mx-20 xl:mx-36 w-[85vw] sm:w-[30rem] md:w-[45rem] lg:w-[60rem] flex items-center justify-center">
                <Swiper
                    slidesPerView={items}
                    spaceBetween={15}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="font-[poppins]"
                >
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">1</p>
                            </div>
                            <img src={Image1} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">2</p>
                            </div>
                            <img src={Image10} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">3</p>
                            </div>
                            <img src={Image7} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">4</p>
                            </div>
                            <img src={Image4} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">5</p>
                            </div>
                            <img src={Image5} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">6</p>
                            </div>
                            <img src={Image6} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">7</p>
                            </div>
                            <img src={Image3} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">8</p>
                            </div>
                            <img src={Image8} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">9</p>
                            </div>
                            <img src={Image9} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <div className="w-auto relative">
                            <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-2xl sm:rounded-3xl text-white">
                                <p className="text-sm sm:text-base font-semibold">10</p>
                            </div>
                            <img src={Image11} alt="productImage" className="rounded-tl-3xl" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

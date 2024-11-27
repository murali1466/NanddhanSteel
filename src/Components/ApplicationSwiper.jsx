import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import Image1 from "../assets/Applications/Image1.png"
import Image2 from "../assets/Applications/Image2.png"
import Image3 from "../assets/Applications/Image3.png"
import Image4 from "../assets/Applications/Image4.png"
import Image5 from "../assets/Applications/Image5.png"
import Image6 from "../assets/Applications/Image6.png"
import Image7 from "../assets/Applications/Image7.png"
import Image8 from "../assets/Applications/Image8.png"
import Image9 from "../assets/Applications/Image9.png"
import Image10 from "../assets/Applications/Image10.png"

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
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image1} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Color Coated Metal Roofing Sheets</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image2} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Trussles Span</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image3} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Metal Deck Sheet</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image4} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Pre-Engineered Buildings</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image5} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Colour Coated Metal Roofing Sheets</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image6} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Colour Coated Metal Roofing Sheets</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image7} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Skylites - Polycarbonate/ FRP Sheets</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image8} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Sandwich / Puf Panel</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image9} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Metal Deck Sheets</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 group">
                        <div className="w-auto relative rounded-tl-2xl sm:rounded-tl-3xl">
                            <img src={Image10} alt="productImage" className="rounded-tl-3xl" />
                            <div className="absolute z-[2] px-5 h-full w-full bg-[#0000008a] -top-full flex items-center justify-center group-hover:top-0 transition-all duration-500 rounded-tl-2xl sm:rounded-tl-3xl">
                                <p className="text-center font-medium text-white text-[0.75rem] sm:text-base"><span className="text-[#ff8686]">Product:</span> Colour Coated Metal Roofing Sheets</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

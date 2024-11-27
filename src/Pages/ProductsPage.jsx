import {useEffect} from "react";
import Roofs from "../assets/Products/Image2.png"
import Swiper from "../Components/Swiper"
import AOS from "aos"
import "aos/dist/aos.css"

function ProductsPage() {
    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });

    return (
        <div className="flex overflow-hidden items-center justify-center flex-col font-[poppins] pt-20">
            <div data-aos="fade-left">
                <p className="text-center font-[Nunito] font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#c0212e]">Our Products</p>
            </div>
            <div data-aos="fade-right" className="mt-5 text-center  px-5 md:px-7 lg:px-10">
                <p className="font-medium text-lg ">Explore Our Wide Range of Roofing and Cladding Solutions</p>
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row gap-2 md:gap-5 pt-5 pb-10  px-5 md:px-7 lg:px-10">
                <div className="flex items-start justify-center flex-col gap-2">
                    <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">1</p></div>
                        <div><p>Colour Coated Metal Roofing Sheets</p></div>
                    </div>
                    <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">2</p></div>
                        <div><p>Fastners</p></div>
                    </div>
                    <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">3</p></div>
                        <div><p>Metal Deck Sheet</p></div>
                    </div>
                    <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">4</p></div>
                        <div><p>Ventilators - Turbo - Ridge</p></div>
                    </div>
                    <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">5</p></div>
                        <div><p>Trussels Span</p></div>
                    </div>
                </div>
                <div className="flex items-start justify-center flex-col gap-2">
                    <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">6</p></div>
                        <div><p>C & Z Purlins</p></div>
                    </div>
                    <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">7</p></div>
                        <div><p>Shylites - Polycarbonate / FRP Sheets</p></div>
                    </div>
                    <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">8</p></div>
                        <div><p>Sandwich / Puf Panel</p></div>
                    </div>
                    <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">9</p></div>
                        <div><p>Pre-Engineered Buildings</p></div>
                    </div>
                    <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">10</p></div>
                        <div><p>Roofing Accessories</p></div>
                    </div>
                </div>
            </div>
            <div data-aos="fade" className="pb-10 flex items-center justify-center">
                <Swiper />
            </div>
            <div className="py-10 bg-[#f5f5f5] w-full flex items-center justify-center flex-col">
                <p data-aos="fade-right" className="mb-5 font-extrabold font-[Nunito] text-2xl md:text-3xl lg:text-4xl text-[#1e4b8c] text-center">Our Roofing Accessories</p>
                <div data-aos="fade-left" className="relative">
                    <div className="absolute mt-5 w-10 h-10 bg-[#c0212e] text-center flex items-center justify-center rounded-3xl text-white">
                        <p>9</p>
                    </div>
                    <img src={Roofs} alt="RoofingAccessories" className="w-[90vw] sm:w-[30rem] lg:w-[40rem] py-5 rounded-3xl"/>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;

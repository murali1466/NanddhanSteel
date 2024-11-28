import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import DotPattern from "../assets/About/DotGrid.svg"
import Swiper from "../Components/ApplicationSwiper"

function Applications() {
    const applications = useRef(null);
    const location = useLocation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });
    useEffect(() => {
        if (location.pathname === "/applications" && applications.current) {
            applications.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div ref={applications} className="flex overflow-hidden items-center justify-center flex-col font-[poppins] pt-20">
            <div className="flex items-center justify-center flex-col">
                <div data-aos="fade-left">
                    <p className="text-center font-[Nunito] font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#c0212e]">Applications</p>
                </div>
                <div data-aos="fade-right" className="mt-5 text-center  px-5 md:px-7 lg:px-10">
                    <p className="font-medium text-lg ">Explore Our Wide Range of Roofing and Cladding Applications.</p>
                </div>
                <div className="flex items-center justify-center flex-col md:flex-row gap-2 md:gap-5 pt-5 pb-10  px-5 md:px-7 lg:px-10 relative">
                    <div>
                        <img src={DotPattern} alt="DotGrid" className="absolute" />
                    </div>
                    <div className="flex items-start justify-center flex-col gap-2">
                        <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">1</p></div>
                            <div><p>Industrial & Agricultural Sheds</p></div>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">2</p></div>
                            <div><p>Warehouses</p></div>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">3</p></div>
                            <div><p>Railway Stations & Bus Shelters</p></div>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">4</p></div>
                            <div><p>Agriculture, Aqua & Centre Boards</p></div>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">5</p></div>
                            <div><p>Airports Terminals & Aircraft Hangers</p></div>
                        </div>
                    </div>
                    <div className="flex items-start justify-center flex-col gap-2">
                        <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">6</p></div>
                            <div><p>Cold Storage & Fruit Canning Industries</p></div>
                        </div>
                        <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">7</p></div>
                            <div><p>Sports Stadiums & Dairy Farms</p></div>
                        </div>
                        <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">8</p></div>
                            <div><p>Garages & Parking Areas</p></div>
                        </div>
                        <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">9</p></div>
                            <div><p>Thermal Power Plants & Egg Workshops</p></div>
                        </div>
                        <div data-aos="fade-left" className="flex items-center justify-start bg-[#1e4b8c] p-1 rounded-3xl text-white gap-3 w-full">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#cc2020] rounded-3xl font-semibold text-[#fff]"><p className="w-10 text-center">10</p></div>
                            <div><p>School & Education Institutarions</p></div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade" className="pb-10 flex items-center justify-center">
                    <Swiper />
                </div>
            </div>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=8247092491" className="bg-emerald-600 flex items-center justify-center p-2 rounded-full h-10 w-10 fixed bottom-10 right-10 z-[10] animate-bounce">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-white"/>
            </a>
        </div>
    );
}

export default Applications;

import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../assets/About/Image1.jpg";
import Why from "../assets/Gallery/Image2.jpg";
import LinePattern from "../assets/About/LinePattern.svg";
import DotPattern from "../assets/About/DotGrid.svg";
import Marquee from "react-fast-marquee";
import Tata from "../assets/Brands/Tata.png";
import Jindal from "../assets/Brands/Jindal.png";
import Navarang from "../assets/Brands/Navarang.webp";
import JSW from "../assets/Brands/jsw.png";
import Apollo from "../assets/Brands/Apollo.jpg";
import Video from "../assets/Brands/Video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

function Company() {
    const location = useLocation();
    const aboutSection = useRef(null);

    useEffect(() => {
        if (location.hash === "#about" && aboutSection.current) {
            aboutSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <>
            <div
                ref={aboutSection}
                className="relative overflow-x-hidden py-20 md:pt-24 md:pb-20 bg-[#f5f5f5] font-[poppins] flex items-center justify-center w-full"
            >
                <div>
                    <img
                        src={LinePattern}
                        alt="Line Pattern"
                        className="absolute -top-20 w-32 lg:w-40 rotate-[30deg]"
                    />
                </div>
                <div className="flex items-center justify-center flex-col md:flex-row gap-5 md:gap-10">
                    <div
                        data-aos="fade-right"
                        className="w-[80vw] md:w-[25rem] lg:w-[36rem] xl:w-[50rem] flex items-center md:items-start justify-center flex-col"
                    >
                        <p className="uppercase text-2xl sm:text-3xl lg:text-4xl font-[Nunito] font-extrabold text-[#1e4b8c] text-center md:text-left">
                            About Us
                        </p>
                        <div className="w-36 md:w-56 lg:w-60 bg-[#c0212e] h-[0.20rem] rounded-lg"></div>
                        <p className="my-5">
                            At{" "}
                            <span className="uppercase font-bold text-xl text-[#c0212e]">
                                NANDDHAN STEEL
                            </span>
                            , an{" "}
                            <span className="uppercase font-bold text-xl text-[#1e4b8c]">
                                ISO 9001:2008
                            </span>{" "}
                            Certified Organization. We pride ourselves on
                            delivering high-quality roofing solutions using the
                            latest technology and top-grade materials. With a
                            dynamic team of experienced professionals, we
                            provide durable, leak-proof, and visually appealing
                            products that cater to diverse industries. Our
                            commitment to quality and innovation ensures we meet
                            the evolving needs of our customers.
                        </p>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="w-[70vw] md:w-[18rem] lg:w-[20rem]"
                    >
                        <img
                            src={DotPattern}
                            alt="Dots pattern"
                            className="absolute bottom-0 w-32"
                        />
                        <img
                            src={About}
                            alt="Side Image"
                            className="rounded-tr-3xl rounded-bl-3xl border-r-4 md:border-r-8 border-[#1e4b8c]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-center bg-[#1e4b8c]">
                <video src={Video} autoPlay={true} loop={true} muted={true} controls type="video/mp4" className="w-[95%] sm:w-[90%] md:w-[80%]"></video>            
            </div>
            <div className="flex items-center justify-center flex-col py-10 pt-20 font-[poppins]">
                <p className="font-[Nunito] text-[#1e4b8c] font-extrabold text-2xl md:text-3xl lg:text-4xl">
                    Our Brands
                </p>
                <div className="w-[90vw] sm:w-[70vw] lg:w-[60rem]">
                    <Marquee
                        className="py-5 overflow-y-hidden scale-90 md:scale-100"
                        speed={80}
                        gradientWidth={20}
                        autoFill={true}
                        lopp={0}
                        gradient
                        gradientColor="white"
                    >
                        <div
                            className="bg-[#1e4b8c] p-0.5 px-1 rounded-lg h-max w-max mx-3"
                            style={{
                                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))",
                            }}
                        >
                            <img src={Tata} className="h-10 md:h-16" />
                        </div>
                        <div
                            className="bg-[#1e4b8c] p-0.5 px-1 rounded-lg h-max w-max mx-3"
                            style={{
                                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))",
                            }}
                        >
                            <img
                                src={Jindal}
                                className="h-10 md:h-16 rounded-lg"
                            />
                        </div>
                        <div
                            className="bg-[#fff] p-0.5 px-1 rounded-lg h-max w-max mx-3"
                            style={{
                                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))",
                            }}
                        >
                            <img
                                src={Navarang}
                                className="h-10 md:h-16 rounded-lg"
                            />
                        </div>
                        <div
                            className="bg-[#fff] p-0.5 rounded-lg h-max w-max mx-3"
                            style={{
                                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))",
                            }}
                        >
                            <img
                                src={JSW}
                                className="h-10 md:h-16 rounded-lg"
                            />
                        </div>
                        <img
                            src={Apollo}
                            className="h-10 md:h-16 rounded-lg mx-3"
                            style={{
                                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))",
                            }}
                        />
                    </Marquee>
                </div>
            </div>
            <div className="relative full bg-[#ffffff] font-[poppins] flex items-center justify-center w-full pb-10">
                <div className="flex items-center justify-center flex-col-reverse md:flex-row-reverse gap-5 md:gap-10">
                    <div className=" flex items-center md:items-start justify-center gap-3 flex-col relative">
                        <div
                            data-aos="fade-right"
                            className="relative z-[2] flex items-center justify-start flex-row bg-[#1e4b8c] w-[90vw] sm:w-auto sm:gap-2 rounded-3xl p-1 text-white"
                        >
                            <div className="w-10 h-10 font-semibold flex items-center justify-center rounded-3xl bg-[#cc2020]">
                                <p className="w-10 text-center">1</p>
                            </div>
                            <p className="px-5 text-sm">
                                ISO 9001:2008 Certified
                            </p>
                        </div>
                        <div
                            data-aos="fade-right"
                            className="relative z-[2] flex items-center justify-start flex-row bg-[#1e4b8c] w-[90vw] sm:w-auto sm:gap-2 rounded-3xl p-1 text-white"
                        >
                            <div className="w-10 h-10 font-semibold flex items-center justify-center rounded-3xl bg-[#cc2020]">
                                <p className="w-10 text-center">2</p>
                            </div>
                            <p className="px-5 text-sm">
                                Aesthetic designs that enhance your building's
                                value
                            </p>
                        </div>
                        <div
                            data-aos="fade-right"
                            className="relative z-[2] flex items-center justify-start flex-row bg-[#1e4b8c] w-[90vw] sm:w-auto sm:gap-2 rounded-3xl p-1 text-white"
                        >
                            <div className="w-10 h-10 font-semibold flex items-center justify-center rounded-3xl bg-[#cc2020]">
                                <p className="w-10 text-center">3</p>
                            </div>
                            <p className="px-5 text-sm">
                                High precision quality and durability
                            </p>
                        </div>
                        <div
                            data-aos="fade-right"
                            className="relative z-[2] flex items-center justify-start flex-row bg-[#1e4b8c] w-[90vw] sm:w-auto sm:gap-2 rounded-3xl p-1 text-white"
                        >
                            <div className="w-10 h-10 font-semibold flex items-center justify-center rounded-3xl bg-[#cc2020]">
                                <p className="w-10 text-center">4</p>
                            </div>
                            <p className="px-5 text-sm">
                                Environmentally friendly and cost-effective
                                solutions
                            </p>
                        </div>
                        <img
                            src={DotPattern}
                            alt="Dots pattern"
                            className="absolute -bottom-10 md:-bottom-20 left-0 w-32 z-[1]"
                        />
                    </div>
                    <div
                        data-aos="fade"
                        className="w-screen h-[16rem] md:w-[18rem] md:h-[20rem] lg:w-[20rem] lg:h-[25rem] flex items-center justify-center relative overflow-hidden"
                        style={{
                            background: `linear-gradient(45deg,rgba(105,0,0,0.6),rgba(0,0,105,0.7)),url(${Why})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    >
                        <p className="uppercase font-extrabold text-2xl sm:text-3xl text-white text-center">
                            WHy Choose Us?
                        </p>
                        <img
                            src={LinePattern}
                            alt="Line Pattern"
                            className="absolute -top-20 -left-20 w-32 lg:w-40 rotate-[30deg]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;

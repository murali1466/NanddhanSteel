import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import GramaSwarajya from "../assets/Clients/gramaSwarajya.jpg"
import Himadri from "../assets/Clients/Himadri.svg"
import KES from "../assets/Clients/KES.avif"
import Ravesan from "../assets/Clients/Ravesan.jpg"
import RVR from "../assets/Clients/RVR.png"
import Sionic from "../assets/Clients/sionic.png"
import SteelPlant from "../assets/Clients/SteelPlant.jpg"
import Varma from "../assets/Clients/Varma.png"

function Gallery() {
    const gallerySection = useRef(null);
    const location = useLocation();
    const [data, setData] = useState({});
    const [enable, setEnable] = useState(false);
    const [isImage, setIsImage] = useState("");
    
    const handleShowImage=(image)=>{
        setIsImage(image);
        setEnable(true);
    }

    const handleCloseImage=()=>{
        setIsImage(null);
        setEnable(false);
    }

    useEffect(() => {
        if (location.hash === "#gallery" && gallerySection.current) {
            gallerySection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    })
    useEffect(()=>{
        axios.get("https://api.cosmicjs.com/v3/buckets/nanddhan-steel-production/objects/675bcb8388767cdc34b9b7e2?pretty=true&read_key=CflLIS30RCirUt744kUC5wCkjEzLDuZFcg85LvbVqAYyMs2jJV&depth=1&props=slug,title,metadata,type")
        .then((res)=>{setData(res.data.object.metadata);})
        .catch(err=>{console.log(err)});
    },[])

    return (
        <>
            <div
                ref={gallerySection}
                className="flex items-center justify-center flex-col bg-[#0b3d66] px-5 sm:px-7 md:px-10 py-20 md:pt-24 font-[poppins]"
            >
                <p data-aos="fade-up" className="font-black uppercase text-2xl sm:text-3xl md:text-4xl text-center text-[#fff] font-[Nunito]">
                    Our Gallery
                </p>
                <p data-aos="fade-up" className="py-5 font-medium text-lg sm:text-xl text-[#fff]">
                    Discover our work! View images of completed projects and our
                    state-of-the-art manufacturing facilities.
                </p>
                <div data-aos="fade-up" className="flex items-center justify-center flex-row md:flex-col gap-3 my-5">
                    <div className="gap-3 flex items-center justify-center flex-col md:flex-row">
                        <img src={data["image_3"]} alt="Image3" className="h-[10rem] w-[40vw] md:w-[10rem] md:h-[10rem] lg:w-[14rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image3)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                        <img src={data["image_2"]} alt="Image2" className="h-[14rem] w-[40vw] md:w-[14rem] md:h-[10rem] lg:w-[18rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image2)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                        <img src={data["image_1"]} alt="Image1" className="h-[21rem] w-[40vw] md:w-[21rem] md:h-[10rem] lg:w-[25rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image1)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    </div>
                    <div className="gap-3 flex items-center justify-center flex-col md:flex-row">
                        <img src={data["image_4"]} alt="Image4" className="h-[14rem] w-[40vw] md:w-[14rem] md:h-[10rem] lg:w-[18rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image4)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                        <img src={data["image_5"]} alt="Image5" className="h-[15rem] w-[40vw] md:w-[15rem] md:h-[10rem] lg:w-[19rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image5)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                        <img src={data["image_6"]} alt="Image6" className="h-[16rem] w-[40vw] md:w-[16rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image6)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    </div>
                    <div className="gap-3 md:flex items-center justify-center flex-col md:flex-row hidden">
                        <img src={data["image_8"]} alt="Image8" className="md:h-[10rem] md:w-[10rem] lg:w-[14rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image8)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                        <img src={data["image_3"]} alt="Image3" className="md:h-[10rem] md:w-[21rem] lg:w-[25rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image3)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                        <img src={data["image_7"]} alt="Image7" className="md:h-[10rem] md:w-[14rem] lg:w-[18rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image7)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    </div>
                </div>
                {
                    enable && 
                    <div className="fixed top-0 bg-[#000000be] h-screen w-full z-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={faTimes} className="absolute text-white top-10 right-10 text-xl hover:cursor-pointer" onClick={handleCloseImage}/>
                        <img src={isImage} alt="Dsplay Image" className="w-[85vw] sm:w-[70vw]" />
                    </div>
                }
            </div>
            <div className="flex items-center justify-center flex-col py-10 pt-20 font-[poppins]">
                <p className="font-[Nunito] text-[#1e4b8c] font-extrabold text-2xl md:text-3xl lg:text-4xl">Our Clients</p>
                <div className="w-[90vw] sm:w-[70vw] lg:w-[60rem]">
                    <Marquee className="py-5 overflow-y-hidden" speed={80} gradientWidth={20} gradient gradientColor="white">
                        <img src={Himadri} className="w-20 mx-3" style={{filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.5))"}}/>
                        <img src={GramaSwarajya} className="w-20 rounded-3xl mx-3" style={{filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.5))"}}/>
                        <img src={KES} className="w-20 rounded-3xl mx-3" style={{filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.5))"}}/>
                        <img src={Ravesan} className="w-20 rounded-3xl mx-3" style={{filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.5))"}}/>
                        <img src={RVR} className="h-16 rounded-3xl mx-3" style={{filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.5))"}}/>
                        <img src={Sionic} className="h-16 rounded-3xl mx-3" style={{filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.5))"}}/>
                        <img src={SteelPlant} className="h-20 rounded-2xl mx-3" style={{filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.5))"}}/>
                        <img src={Varma} className="h-20 rounded-2xl mx-3" style={{filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.5))"}}/>
                    </Marquee>
                </div>
            </div>
        </>
    );
}

export default Gallery;

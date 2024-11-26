import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Image1 from "../assets/Gallery/Image1.jpg";
import Image2 from "../assets/Gallery/Image2.jpg";
import Image3 from "../assets/Gallery/Image3.jpg";
import Image4 from "../assets/Gallery/Image4.jpg";
import Image5 from "../assets/Gallery/Image6.jpg";
import Image6 from "../assets/Gallery/Image7.jpg";
import Image7 from "../assets/Gallery/Image8.jpg";
import Image8 from "../assets/Gallery/Image9.jpg";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
    const gallerySection = useRef(null);
    const location = useLocation();
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

    return (
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
                    <img src={Image3} alt="Image3" className="h-[10rem] w-[40vw] md:w-[10rem] md:h-[10rem] lg:w-[14rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image3)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    <img src={Image2} alt="Image2" className="h-[14rem] w-[40vw] md:w-[14rem] md:h-[10rem] lg:w-[18rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image2)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    <img src={Image1} alt="Image1" className="h-[21rem] w-[40vw] md:w-[21rem] md:h-[10rem] lg:w-[25rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image1)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                </div>
                <div className="gap-3 flex items-center justify-center flex-col md:flex-row">
                    <img src={Image4} alt="Image4" className="h-[14rem] w-[40vw] md:w-[14rem] md:h-[10rem] lg:w-[18rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image4)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    <img src={Image5} alt="Image5" className="h-[15rem] w-[40vw] md:w-[15rem] md:h-[10rem] lg:w-[19rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image5)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    <img src={Image6} alt="Image6" className="h-[16rem] w-[40vw] md:w-[16rem] md:h-[10rem] lg:w-[20rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image6)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                </div>
                <div className="gap-3 md:flex items-center justify-center flex-col md:flex-row hidden">
                    <img src={Image8} alt="Image8" className="md:h-[10rem] md:w-[10rem] lg:w-[14rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image8)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    <img src={Image3} alt="Image3" className="md:h-[10rem] md:w-[21rem] lg:w-[25rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image3)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
                    <img src={Image7} alt="Image7" className="md:h-[10rem] md:w-[14rem] lg:w-[18rem] lg:h-[15rem] object-cover object-center rounded-xl" onClick={()=>handleShowImage(Image7)} style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}/>
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
    );
}

export default Gallery;

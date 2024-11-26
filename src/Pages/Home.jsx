import { useRef, useEffect } from "react";
import Bg from "../assets/Gallery/Image4.jpg";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const location = useLocation();
    const homeSection = useRef(null);

    useEffect(() => {
        if (location.hash === "#home" && homeSection.current) {
            homeSection.current.scrollIntoView({ behavior: "smooth" });
            // console.log(homeSection.current)
        }
    }, [location]);
    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });

    return (
        <div
            ref={homeSection}
            className="w-full pt-20 md:pt-24 px-5 sm:px-7 md:px-10 font-[Poppins] flex items-center justify-end overflow-hidden"
            style={{
                background: `linear-gradient(to left, rgba(0,0,0, 0.9), rgba(0,0,0, 0.7)), url(${Bg})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex items-center md:items-end justify-center flex-col py-20 md:py-32">
                <p data-aos="fade-left" className="font-black font-[Nunito] md:w-[30rem] lg:w-[45rem] text-center md:text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                    NANDDHAN STEEL ROOFING INDUSTRIES
                </p>
                <p data-aos="fade-left" className="italic text-white font-extralight">
                    Discover the Quality . . .
                </p>
                <p data-aos="fade-left" className="text-white md:w-[40rem] lg:w-[45rem] text-center md:text-right my-5">
                    A trusted name in premium roofing and wall cladding
                    solutions. Based in Visakhapatnam, Andhra Pradesh, we
                    specialize in manufacturing trapezoidal color-coated sheets,
                    roofing accessories, and erection systems.
                </p>
                <div className="flex flex-row flex-wrap justify-center gap-5" data-aos="fade-up">
                    <Link
                        to="/products"
                        className="bg-[#fc4b59] hover:bg-transparent border-2 border-[#fc4b59] text-white hover:text-[#fc4b59] px-5 py-1 rounded-md transition-all duration-300"
                    >
                        Explore
                    </Link>
                    <Link
                        to="/#contact"
                        className="bg-transparent hover:bg-[#fc4b59] text-[#fc4b59] hover:text-[#ffffff] border-2 border-[#fc4b59] px-5 py-1 rounded-md transition-all duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;

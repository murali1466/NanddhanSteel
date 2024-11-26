import {useEffect, useRef, useState} from "react";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const location = useLocation();
    const homeSection = useRef(null);
    const [menu,setMenu] = useState(false);

    useEffect(()=>{
        if(location.hash==="#home" && homeSection.current)
        {
            homeSection.current.scrollIntoView({behavior: 'smooth'});
            // console.log(homeSection.current)
        }
    },[location]);

    const handleMenu=()=>{
        setMenu(!menu);
    }

    return (
        <div ref={homeSection} className="bg-[#fff] fixed z-[5] w-full h-max py-1 flex items-center justify-center md:justify-between font-[Nunito] px-5 md:px-10 shadow-md shadow-[#00000015]">
            <div>
                <img src={Logo} alt="Logo" className="h-12 w-12"/>
            </div>
            <div className="absolute z-[7] left-5 block md:hidden" onClick={handleMenu}>
                <FontAwesomeIcon icon={menu?faTimes:faBars} />
            </div>
            <div className={`flex items-start md:items-center justify-center flex-col md:flex-row uppercase text-sm font-extrabold gap-5 w-max h-screen bg-white px-10 md:px-0 ${!menu?"-left-60 md:left-0":"left-0"} md:bg-transparent transition-all duration-500 top-0 md:right-0 md:h-auto shadow-xl md:shadow-transparent shadow-[#00000034] text-[#1e4b8c] z-[6] absolute md:relative`}>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto" to="/#home" onClick={handleMenu}>Home</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto" to="/#company" onClick={handleMenu}>Company</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto" to="/products" onClick={handleMenu}>Products</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto" to="/services" onClick={handleMenu}>Services</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto" to="/#gallery" onClick={handleMenu}>Gallery</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto" to="/#contact" onClick={handleMenu}>Contact US</Link>
            </div>
        </div>
    );
}

export default NavBar;

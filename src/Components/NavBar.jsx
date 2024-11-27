import { useState} from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [menu,setMenu] = useState(false);

    const handleMenu=()=>{
        setMenu(!menu);
    }

    return (
        <div className="bg-[#fff] fixed z-[5] w-full h-max py-1 flex items-center justify-center md:justify-between font-[Nunito] px-5 md:px-10 shadow-md shadow-[#00000015]">
            <div>
                <img src={Logo} alt="Logo" className="h-12 w-12"/>
            </div>
            <div className="absolute z-[7] left-5 block md:hidden" onClick={handleMenu}>
                <FontAwesomeIcon icon={menu?faTimes:faBars} className="text-[#1e4b8c]"/>
            </div>
            <div className={`flex items-start md:items-center justify-center flex-col md:flex-row uppercase text-sm font-extrabold gap-5 w-max h-screen bg-white px-10 md:px-0 ${!menu?"-left-60 md:left-0":"left-0"} md:bg-transparent transition-all duration-500 top-0 md:right-0 md:h-auto shadow-xl md:shadow-transparent shadow-[#00000034] text-[#1e4b8c] z-[6] absolute md:relative`}>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#c0212e]" to="/#home" onClick={handleMenu}>Home</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#c0212e]" to="/#about" onClick={handleMenu}>Company</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#c0212e]" to="/#products" onClick={handleMenu}>Products</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#c0212e]" to="/applications" onClick={handleMenu}>Applications</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#c0212e]" to="/#gallery" onClick={handleMenu}>Gallery</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#c0212e]" to="/#contact" onClick={handleMenu}>Contact US</Link>
            </div>
        </div>
    );
}

export default NavBar;

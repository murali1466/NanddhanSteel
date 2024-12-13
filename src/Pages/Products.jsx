import {useEffect, useRef, useState} from "react";
import { useLocation, Link } from "react-router-dom";
import Card from "../Components/ProductsCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image1 from "../assets/Products/Image1.png"
import Image5 from "../assets/Products/Image5.png"
import Image7 from "../assets/Products/Image7.png"
import Image9 from "../assets/Products/Image9.png"

import Image4 from "../assets/Products/Image4.png"
import Image3 from "../assets/Products/Image3.png"
import Image6 from "../assets/Products/Image6.png"

function Products() {
    const productSection=useRef(null)
    const location = useLocation();

    useEffect(()=>{
        if(location.hash==="#products" && productSection.current)
        {
            productSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location]);
    return (
        <>
            <div ref={productSection} className="font-[poppins] px-5 md:px-7 lg:px-10 py-10 pt-20 bg-[#f5f5f5]">
                <div className="font-[Nunito] font-extrabold">
                    <h1 className="text-center text-4xl uppercase text-[#c0212e]">Our Products</h1>
                </div>
                <p className="text-center mt-5 font-medium text-lg text-[#0d3b66]">
                    Explore our wide range of roofing and cladding solutions-
                </p>
                <div className="flex items-center justify-center flex-row flex-wrap my-10 mt-5">
                    <Card heading="Color Coated Metal Roofing Sheets" Image={Image1}/>
                    <Card heading="Trussles Span" Image={Image5}/>
                    <Card heading="Metal Deck Sheet" Image={Image7}/>
                    <Card heading="Pre-Engineered Buildings" Image={Image9}/>
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/products" className="flex items-center justify-center flex-row w-max bg-[#c0212e] hover:bg-[#f5f5f5] text-white hover:text-[#c0212e] border-2 border-[#c0212e] hover:font-semibold rounded-[0.2rem] px-3 py-1 transition-all duration-300">
                        <p>View All</p>
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm ml-3"/>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-start flex-col bg-[#f5f5f5] px-5 md:px-7 lg:px-10 pb-10">
                <p className="my-5 text-2xl text-[#c0212e] font-extrabold font-[Nunito]">Advanced Solutions</p>
                <div className="flex flex-wrap flex-row items-center justify-center gap-5">
                    <div className="w-56 sm:w-64 flex items-center justify-center flex-col bg-[#fff] border border-b-4 shadow-lg shadow-[#0000001e] border-[#1e4b8c] rounded-lg px-2 py-4 ">
                        <img src={Image4} alt="productImage" className="h-36 rounded-md shadow-md shadow-[#00000023]"/>
                        <div className="text-center">
                            <p className="text-base sm:text-lg font-semibold my-3">
                                Ventilators - Turbo - Ridge
                                {/* {productsData[0].title} */}
                            </p>
                            <p className="font-extralight text-sm"> Wind-driven systems for optimal air circulation.</p>
                        </div>
                    </div>
                    <div className="w-56 sm:w-64 flex items-center justify-center flex-col bg-[#fff] border border-b-4 shadow-lg shadow-[#0000001e] border-[#1e4b8c] rounded-lg px-2 py-4 ">
                        <img src={Image3} alt="productImage" className="h-36 rounded-md shadow-md shadow-[#00000023]"/>
                        <div className="text-center">
                            <p className="text-base sm:text-lg font-semibold my-3">Skylites - Polycarbonate/ FRP Sheets</p>
                            <p className="font-extralight text-sm"> High-impact, lightweight sheets for glazing and roofing applications.</p>
                        </div>
                    </div>
                    <div className="w-56 sm:w-64 flex items-center justify-center flex-col bg-[#fff] border border-b-4 shadow-lg shadow-[#0000001e] border-[#1e4b8c] rounded-lg px-2 py-4 ">
                        <img src={Image6} alt="productImage" className="h-36 rounded-md shadow-md shadow-[#00000023]"/>
                        <div className="text-center">
                            <p className="text-base sm:text-lg font-semibold my-3">C & Z Purlins</p>
                            <p className="font-extralight text-sm"> Cold-rolled supports for superior strength and flexibility.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end bg-[#f5f5f5] px-10 md:px-14 lg:px-20 pt-10">
                    <Link to="/products" className="flex items-center justify-center flex-row w-max bg-[#c0212e] hover:bg-[#f5f5f5] text-white hover:text-[#c0212e] border-2 border-[#c0212e] hover:font-semibold rounded-[0.2rem] px-3 py-1 transition-all duration-300">
                        <p>View All</p>
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm ml-3"/>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Products;

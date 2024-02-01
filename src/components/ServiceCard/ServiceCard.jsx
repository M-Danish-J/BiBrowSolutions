import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({ image, title }) => {
    return (
        <div className='rounded max-h-[405px] shadow-lg border px-10 py-10 flex items-center justify-center flex-col text-center space-y-10'>
            <img src={image} alt="imgg" />
            <p className='text-[#000F5C] text-2xl leading-relaxed tracking-wide font-bold'>{title}</p>
            <div className="flex items-center font-bold text-lg cursor-pointer hover:text-[#0d6efd]">
                <span>Click here</span>
                <IoIosArrowRoundForward size={30} />
            </div>
        </div>
    )
}

export default ServiceCard
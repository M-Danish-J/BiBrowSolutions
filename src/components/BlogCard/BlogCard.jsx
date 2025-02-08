import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ title, image, date }) => {
    return (
        <div className='w-[350px] border shadow rounded-lg mb-32'>
            <div>
                <img src={image} alt={title} className='object-cover rounded-t-lg' />
            </div>
            <div className="p-8">
                <div className="flex items-center gap-1">
                    <MdOutlineDateRange />
                    <p className='hover:text-[#0d6efd] cursor-pointer transition duration-300 font-extrabold text-sm'>{date}</p>
                </div>
                <h1 className='py-6 hover:text-[#0d6efd] cursor-pointer transition duration-300 text-2xl font-bold leading-8'>{title}</h1>
                <div className="flex items-center gap-1 hover:text-[#0d6efd] cursor-pointer transition duration-300">
                    <p>Click here</p>
                    <FaArrowRightLong />
                </div>
            </div>
        </div>
    )
}

export default BlogCard
import React from 'react'
import Paragraph from '../Custom/Paragragh/Paragraph'
import author from '../../assets/testimonial-author.png'
import { FaQuoteRight } from "react-icons/fa";

export default function TestimonialCard({ }) {
    return (
        <div>
            <div className=" flex flex-col justify-center border-2 shadow bg-white w-[340px] relative pt-12 rounded-md">
                <div>
                    <Paragraph title="Nam venenatis vehicula orci, cursus at sapien et. Donec suscipit porta turpis non malesuada. In sit amet vestibulum" className="text-[#666F9D] px-8 text-base text-start" />
                </div>
                <div className="px-4 flex items-center gap-10 pt-12">
                    <div className='w-2/5'>
                        <img src={author} alt="img" className='h-[150px]' />
                    </div>
                    <div className='pt-8'>
                        <p className='text-2xl font-bold'>Michael Jack</p>
                        <p className='font-normal text-sm pt-2'>Founder & CEO</p>
                    </div>
                </div>
                <div className="absolute right-10">
                    <FaQuoteRight size={80} color='#e5e7ee' />
                </div>
            </div>
        </div>
    )
}

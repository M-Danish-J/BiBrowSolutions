import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import footerbg from '../../assets/footer-bg.png'
import { IoIosSend } from "react-icons/io";


export default function Footer() {
    const backgroundStyle = {
        backgroundImage: `url(${footerbg})`,

        backgroundPosition: 'center',
    };
    return (
        <div>
            <div className="bg-[transparent !important] px-7 md:px-12 lg:px-16 pt-16 shadow-xl"
                style={
                    backgroundStyle
                }
            >

                <div className='md:flex'>
                    <div className="md:w-1/2">
                        <h1 className="text-[#1D2C38] text-[28px] leading-4 mb-10 font-[750]">Bibrow</h1>
                        <p className="text-[#74787C] mb-4 md:text-[20px] font-semibold leading-normal">At TechPros Solutions, we are about technology and dedicated to providing IT solutions for businesses of all sizes.</p>
                        <div className="flex justify-start gap-3 mt-8">
                            <div className="w-[45px] h-[45px]  leading-[45px] text-center bg-[#223452] flex justify-center items-center  rounded-[50%]">
                                <FaLocationDot className="text-[#bdc2cb] " />
                            </div>
                            <p className="text-[#74787C] font-semibold w-48">1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
                        </div>
                    </div>
                    <div className="flex md:w-1/2 flex-col w-36 justify-center items-center mx-auto ">
                        <div>
                            <h1 className="capitalize text-[#1D2C38] text-[28px] leading-4 mt-8 md:mt-0 mb-10 font-[750]">Page Links</h1>
                            <div className="text-start">
                                <p className="capitalize text-[#74787C] text-[18px] my-3 leading-normal font-semibold">Service</p>
                                <p className="capitalize text-[#74787C] text-[18px] my-3 leading-normal font-semibold">Portfolio</p>
                                <p className="capitalize text-[#74787C] text-[18px] my-3 leading-normal font-semibold">Contact Us</p>
                                <p className="capitalize text-[#74787C] text-[18px] my-3 leading-normal font-semibold">About Us</p>
                                <p className="capitalize text-[#74787C] text-[18px] my-3 leading-normal font-semibold">Blog</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:mt-16 lg:pl-10">
                <div className='mt-8 md:mt-0 md:w-1/2'>
                    <h1 className="text-[#1D2C38] text-[28px] leading-4 mb-10 font-[750]">Contacts</h1>
                    <div>
                        <div className="flex items-center justify-start gap-3 mb-5 text-[#74787C] ">
                            <FaLocationDot />
                            <p className='w-48 md:w-full md:font-semibold text-[17px]'>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 mb-5 text-[#74787C] ">
                            <FaLocationDot />
                            <p className='w-48 md:w-full md:font-semibold text-[17px]'>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 mb-5 text-[#74787C] ">
                            <FaLocationDot />
                            <p className='w-48 md:w-full md:font-semibold text-[17px]'>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
                        </div>
                        <div className="flex items-center justify-start gap-3 mb-5 text-[#74787C] ">
                            <FaLocationDot />
                            <p className='w-48 md:w-full md:font-semibold text-[17px]'>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
                        </div>

                    </div>
                </div>
                <div class='bg-[#F8FBFF]  rounded-md flex flex-col justify-center items-center md:w-1/2'>
                    <h1 className="text-[#1D2C38] text-[28px] leading-4 mb-10 font-[750] pt-16 md:pt-0">Subscribe</h1>
                    <p className="text-center px-9 text-[#74787C] capitalize mb-3">are you interested in following our particular website</p>
                    <div class='relative z-50 flex items-center'>
                        <input type="email" className="bg-transparent md:w-64 lg:w-96 lg:h-16 border-2 border-[#90a6c2] h-12 rounded-lg text-start pl-8 text-[#666F9D]"
                            placeholder='Enter Your Email'
                            name="" id="" />
                        <div className="bg-blue-600 w-12 h-10 absolute right-2 flex justify-center my-2 items-center rounded-lg">
                            <IoIosSend className="w-7 h-7 text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css"
import Button from '../Custom/Button/Button';

export default function Navbar() {

    const [HamBurger, setHamBurger] = useState(false)

    const closeNavbar = () => {
        setHamBurger(false);
    };

    const [Sticky, setSticky] = useState(false);
    const [Large, setLarge] = useState(false);

    const handleScroll = () => {
        setSticky(window.scrollY > 70);
    };

    const handleResize = () => {
        setLarge(window.innerWidth > 1000);

    }
    const [isClosing, setIsClosing] = useState(false);

    const handleToggle = () => {
        if (HamBurger) {
            setIsClosing(true);
            setTimeout(() => {
                setHamBurger(false);
                setIsClosing(false);
            }, 600); // Make sure this matches your CSS animation duration
        } else {
            setHamBurger(true);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className='relative'>
                <div className={`flex items-center justify-between px-2 lg:px-16 xl:px-28 py-5 lg:py-7 border-b z-50 ${Sticky && Large ? "fixed top-0 left-0 right-0 fade-in-top bg-white" : ""}`}>
                    <div className='font-bold text-4xl cursor-pointer mr-16 lg:hidden'>
                        BiBrow
                    </div>
                    <nav className='hidden lg:flex '>
                        <div className='font-bold text-4xl cursor-pointer mr-16'>
                            BiBrow
                        </div>
                        <ul className={`flex items-center justify-center gap-9 font-bold text-base`}>
                            <a href='/' className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black'>Home</a>
                            <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black'>About Us</li>
                            <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black'>Service</li>
                            <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black'>Faq</li>
                            <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black'>Pricing</li>
                            <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black'>Blog</li>
                        </ul>
                    </nav>
                    <div className="hidden lg:hidden md:block xl:block">
                        <div className="flex items-center gap-16 lg:gap-20">
                            <div className="flex items-center gap-4">
                                <div className="px-4 py-4 rounded-full border">
                                    <FaPhoneAlt size={18} />
                                </div>
                                <div className="space-y-3">
                                    <p className='text-sm text-[#333F7D]'>Tell Us</p>
                                    <p>+92 340 1655185</p>
                                </div>
                            </div>
                            <Button text="Start Free Trail" className="text-white text-base font-bold px-7 py-4 bg-[#104CBA] hover:bg-black cursor-pointer rounded-lg transition-all duration-500" />
                        </div>
                    </div>
                    <div className="lg:hidden text-xl px-4 py-4 mx-10 bg-gray-100 hover:bg-[#283641] hover:text-white rounded-lg" onClick={handleToggle}>
                        <GiHamburgerMenu />
                    </div>
                </div>
                {HamBurger &&
                    <div className={`fixed inset-0 bg-black bg-opacity-60 z-40`} onClick={handleToggle}>
                        <div className={`fixed  max-w-xs w-5/6 md:w-2/5 top-0 bg-white lg:hidden ${isClosing ? 'fade-out-left' : 'fade-in-left'} border-r-4 border-[#104CBA] h-screen z-50`}>
                            <nav className=''>
                                <div className='py-12 text-center text-white bg-[#104CBA] font-bold text-4xl cursor-pointer'>
                                    BiBrow
                                </div>
                                <ul className={`flex flex-col gap-4 text-sm px-10 py-10`}>
                                    <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black border-b pb-3 px-3'>Home</li>
                                    <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black border-b pb-3 px-3'>About Us</li>
                                    <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black border-b pb-3 px-3'>Service</li>
                                    <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black border-b pb-3 px-3'>Faq</li>
                                    <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black border-b pb-3 px-3'>Pricing</li>
                                    <li className='hover:text-[#0d6efd] transition-all duration-300 cursor-pointer shadow-black border-b pb-3 px-3'>Blog</li>
                                </ul>
                                <div className="absolute -right-5 top-6 text-white px-2 py-2 rounded-full bg-[#283641] " onClick={handleToggle}>
                                    <IoMdClose size={20} />
                                </div>
                            </nav>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

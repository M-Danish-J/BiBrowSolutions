import React from 'react'
import { FaChevronUp } from "react-icons/fa";

const UpButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handleScroll = () => {
        setTimeout(() => {
            scrollToTop()
        }, 800);
    }
    return (
        <div onClick={handleScroll} className='px-3 py-3 bg-[#2058bf] rounded text-white cursor-pointer'>
            <FaChevronUp />
        </div>
    )
}
export default UpButton
import React, { useState, useEffect } from 'react';
import { HiOutlineCheck } from "react-icons/hi";
import './Counter.css'

const Counter = () => {
    return (
        <>
            <div className='bg-white fadeInUp  grid sm:grid-cols-2 lg:grid-cols-3 border shadow-lg items-center justify-start gap-16 lg:gap-0 px-10 lg:px-32 py-10 sm:py-20' >
                <div data-aos-offset="50" data-aos="fade-up-right" data-aos-duration="1000">
                    <Component finalValue={12} speed={350} symbol='M+' desc='Successful work' animation="slideInLeft" />
                </div>
                <div data-aos-offset="50" data-aos="fade-up" data-aos-duration="1000">
                    <Component finalValue={18} speed={200} symbol='%' desc='Upgrade conversion' animation="slideInUp" />
                </div>
                <div data-aos-offset="50" data-aos="fade-up-left" data-aos-duration="1000">
                    <Component finalValue={10} speed={300} symbol='M' desc='Client Review' animation="slideInRight" />
                </div>
            </div>
        </>
    );
}

function Component({ finalValue, symbol, desc, speed, animation }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = () => {
            if (count < finalValue) {
                setCount(prevCount => prevCount + 1);
            }
        };

        const timer = setInterval(increment, speed);

        return () => clearInterval(timer);
    }, [count, finalValue, speed]);

    return (
        <div className={`flex gap-4 items-center ${animation}`}>
            <div className="rounded-full px-3 py-3 bg-[#e3f6fb]">
                <HiOutlineCheck color='#7fd7ed' size={30} />
            </div>
            <div className="font-extrabold text-4xl">
                <span>{count}</span><span>{symbol}</span>
                <p className='text-[#666F9D] font-medium text-sm pt-2'>{desc}</p>
            </div>
        </div>
    );
}

export default Counter;

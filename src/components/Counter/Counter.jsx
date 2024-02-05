import React, { useState, useEffect } from 'react';
import { HiOutlineCheck } from "react-icons/hi";
import 'aos/dist/aos.css'; // Ensure AOS CSS is imported
import { Fade } from 'react-reveal';
import AnimatedCounter from '../Custom/Counter/AnimatedCounter';

const Counter = () => {
    const customStyles = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0,100%,0)
        }
    
        to {
            opacity: 1;
            transform: none
        }
    }
    
    .fadeInUp {
        animation-name: fadeInUp
    }
    .slideInDown {
        animation-name: slideInDown
    }
    
    @keyframes slideInLeft {
        from {
            transform: translate3d(-100%,0,0);
            visibility: visible
        }
    
        to {
            transform: translate3d(0,0,0)
        }
    }
    
    .slideInLeft {
        animation-name: slideInLeft
    }
    
    @keyframes slideInRight {
        from {
            transform: translate3d(100%,0,0);
            visibility: visible
        }
    
        to {
            transform: translate3d(0,0,0)
        }
    }
    
    .slideInRight {
        animation-name: slideInRight
    }
    
    @keyframes slideInUp {
        from {
            transform: translate3d(0,100%,0);
            visibility: visible
        }
    
        to {
            transform: translate3d(0,0,0)
        }
    }
    
    .slideInUp {
        animation-name: slideInUp
    }
  `;
    return (
        <>
        <style dangerouslySetInnerHTML={{ __html: customStyles }} />
        <div className='bg-white fadeInUp  grid sm:grid-cols-2 lg:grid-cols-3 border shadow-lg items-center justify-start gap-16 lg:gap-0 px-10 lg:px-32 py-10 sm:py-20' data-aos="zoom-in-up">
        <Fade left>
            <Component finalValue={12} speed={350} symbol='M+' desc='Successful work' animation="slideInLeft" />
            </Fade>      
            {/* <AnimatedCounter Count="12" speed={3500} symbol='M+' desc='Successful work' animation="slideInLeft"/> */}
            {/* <AnimatedCounter Count="18" speed={2000} symbol='%' desc='Upgrade conversion' animation="slideInUp"/> */}
            {/* <AnimatedCounter Count="10" speed={3000} symbol='M' desc='Client Review' animation="slideInRight"/> */}

                <Fade up>
            <Component finalValue={18} speed={200} symbol='%' desc='Upgrade conversion' animation="slideInUp" />
        </Fade>
        <Fade right>
            <Component finalValue={10} speed={300} symbol='M' desc='Client Review' animation="slideInRight" />
        
        </Fade>
    </div>
    </>
    );
}

function Component({ finalValue, symbol, desc, speed ,animation }) {
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

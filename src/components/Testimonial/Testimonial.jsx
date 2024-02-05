import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import Button from '../Custom/Button/Button';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from '../Custom/Heading/Heading';
// import './style.css'
export default function Testimonial() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const CustomDot = ({ onClick, index, active }) => (
        <button
            className={`border-white outline-blue-400 outline-2 border-4 ${active ? "bg-blue-800 outline outline-1 outline-blue-600" : "bg-gray-100"
                } w-5 h-5 rounded-full mx-1 -mt-8 `}
            onClick={() => onClick()}
        >
        </button>
    );


    return (
        <div className='my-16 md:mt-96 xl:mt-20 sm:mx-10 lg:mx-32 xl:mx-40'>
            <div className="text-center">
                <Button className=" bg-[#FF7A41] mb-6 text-white font-[750] text-[16px] px-4 py-[10px] rounded-[6px]" text="07 Testimonial" />
            </div>
            <Heading className="xl:px-52 text-[48px] mb-6 font-extrabold text-center leading-[1.4em] text-[#000F5C]" title="Really take a look at What Say our clients" />
            <Carousel renderButtonGroupOutside={true}
                draggable={true}
                showDots={true}
                customDot={<CustomDot />}
                swipeable={true}
                infinite={true}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                arrows={false}
                dotListClass="custom-dot-list-style"
                className='pb-24 pt-16 flex justify-center items-center'
            >
                
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                {/* <TestimonialCard /> */}
                {/* <TestimonialCard /> */}
                {/* <TestimonialCard /> */}
                {/* <TestimonialCard /> */}
                {/* <TestimonialCard /> */}
                {/* <TestimonialCard /> */}
                {/* <TestimonialCard /> */}
                {/* <TestimonialCard /> */}
            </Carousel>
        </div>
    );
}

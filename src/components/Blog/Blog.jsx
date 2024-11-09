import React from 'react'
import Button from '../Custom/Button/Button'
import Heading from '../Custom/Heading/Heading'
import BlogCard from '../BlogCard/BlogCard'
import blogImg from '../../assets/blog-6.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Blog = () => {
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
        <div className='flex items-start justify-center gap-16 w-full px-4 lg:px-20 xl:px-40'>
            <div className="w-2/5">
                <div>
                    <div className="">
                        <Button className="bg-[#FF7A41] mb-6 text-white font-[750] text-[16px] px-4 py-[10px] rounded-[6px]" text="Blog & News" />
                    </div>
                    <Heading className="text-[48px] mb-6 font-extrabold leading-[1.4em] text-[#000F5C]" title="Get Update for Data Science" />
                    <p className='font-medium text-2xl leading-6 text-[#1d2c38]'>68,000 client Trusted Restly</p>
                </div>
            </div>
            <div className="w-full">
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
                    className='pb-24 pt-16'
                >
                    <BlogCard image={blogImg} title='Meet Smashing Book New Frontiers In Web…' date='April,21 2005' />
                    <BlogCard image={blogImg} title='Meet Smashing Book New Frontiers In Web…' date='April,21 2005' />
                    <BlogCard image={blogImg} title='Meet Smashing Book New Frontiers In Web…' date='April,21 2005' />
                    <BlogCard image={blogImg} title='Meet Smashing Book New Frontiers In Web…' date='April,21 2005' />
                </Carousel>
            </div>
        </div>
    )
}

export default Blog
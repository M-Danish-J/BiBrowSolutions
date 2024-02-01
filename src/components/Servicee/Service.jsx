import React from 'react'
import Button from '../Custom/Button/Button'
import Heading from '../Custom/Heading/Heading'
import ServiceCard from '../ServiceCard/ServiceCard'
import serviceImg1 from '../../assets/service-seven2.png'
import serviceImg2 from '../../assets/service-seven3-150x136.png'
import serviceImg3 from '../../assets/hicon5.png'
import serviceImg4 from '../../assets/service-triangle.png'
import BgService from '../../assets/servicesBg.png'
import './Service.css'
import Counter from '../Counter/Counter'

const Service = () => {
    const backgroundStyle = {
        backgroundImage: `url(${BgService})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>
            <div className='mt-32 px-4 lg:px-20 xl:px-40 relative'>
                <div className="text-center">
                    <Button className=" bg-[#FF7A41] mb-6 text-white font-[750] text-[16px] px-4 py-[10px] rounded-[6px]" text="03 Our Services" />
                </div>
                <Heading className="xl:px-52 text-[48px] mb-6 font-extrabold text-center leading-[1.4em] text-[#000F5C]" title="Our proposition Data Science and Analytics Services" />
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-center justify-center">
                    <ServiceCard title='Machine Learning Bootcamp' image={serviceImg1} />
                    <ServiceCard title='Digital Data Consulting for Science lab' image={serviceImg2} />
                    <ServiceCard title='Data Visualization BootCamp' image={serviceImg1} />
                </div>
                <div className="hidden md:block absolute top-40 left-20 zoom-in-zoom-out">
                    <img src={serviceImg3} alt="imgggg" />
                </div>
                <div className="hidden lg:block absolute right-40 top-40 hanging">
                    <img src={serviceImg4} alt="imgggg" />
                </div>
            </div>
            <div style={backgroundStyle} className="flex items-center justify-center text-lg underline-offset-4 underline h-72 text-center px-4">
                <p className='text-[#666F9D]'>Want to learn More about Our Services?
                    <strong className='font-extrabold text-black'>Click here</strong></p>
            </div>
            <div className="px-4 lg:px-20 xl:px-40 ">
                <Counter />
            </div>
        </>
    )
}

export default Service
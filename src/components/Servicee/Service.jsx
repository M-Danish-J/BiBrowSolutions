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

const Service = () => {
    const backgroundStyle = {
        backgroundImage: `url(${BgService})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>
            <div className='mt-24 md:mt-32 px-4 lg:px-20 xl:px-40 relative' id='service'>
                <div data-aos="fade-up" data-aos-duration="2000" className="md:text-center">
                    <Button className=" bg-[#FF7A41] mb-6 text-white font-[750] text-[16px] px-4 py-[10px] rounded-[6px]" text="Our Services" />
                    <Heading className="xl:px-52 text-[48px] mb-6 font-extrabold md:text-center leading-[1.4em] text-[#000F5C]" title="Comprehensive Digital Development Services" />
                </div>
                < div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-center justify-center" >
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <ServiceCard title='Custom App Development for a Seamless User Experience' image={serviceImg1} />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <ServiceCard title='Transform Your Online Presence with Expert Web Development' image={serviceImg2} />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <ServiceCard title='Bringing Your Game Ideas to Life with Innovation' image={serviceImg1} />
                    </div>

                </div >

                < div className="hidden md:block absolute top-40 left-20 zoom-in-zoom-out" >
                    <img src={serviceImg3} alt="imgggg" />
                </div >
                <div className="hidden lg:block absolute right-40 top-40 hanging">
                    <img src={serviceImg4} alt="imgggg" />
                </div>
            </div >
            <div style={backgroundStyle} className="flex items-center justify-center text-lg underline-offset-4 underline h-72 text-center px-4">
                <p data-aos="fade-up" data-aos-duration="500" className='text-[#666F9D]'>Want to learn More about Our Services?
                    <strong className='font-extrabold text-black'>Click here</strong></p>
            </div>
        </>
    )
}

export default Service
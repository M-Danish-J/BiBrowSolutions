import React from 'react'
import Button from '../Custom/Button/Button'
import Heading from '../Custom/Heading/Heading'
import Paragraph from '../Custom/Paragragh/Paragraph'
import aboutusimg from '../../assets/about-seven.png'
import Image from '../Custom/Image/Image'
import CheckPoint from '../CheckPoint/CheckPoint'

export default function AboutUs() {
  return (
    <div className=" mt-[7em] md:mt-[25em] lg:mt-[32em] xl:mt-[14em] flex flex-col-reverse xl:flex-row xl:justify-center mx-3 xl:ml-44" id='aboutus'>
      <div data-aos="fade-right" data-aos-offset="50" data-aos-duration="2000" className='flex justify-center items-center xl:w[45%]'>
        <Image image={aboutusimg} className="w-full " />
      </div>
      <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2000" className="mt-16 xl:mt-0 xl:w-[45%]">
        <Button className=" bg-[#FF7A41] mb-6 lg:mb-2 lg:p-2.5 text-white  font-[750] md:font-[850] text-[16px]  p-[14px] rounded-[6px]" text="What We Do" />
        <Heading className="text-4xl md:text-[50px] lg:text-[45px] lg:font-[900] xl:text-[55px] xl:w-[600px] 
        lg:leading-[115px] xl:leading-[65px] md:leading-[1.11em] mb-6 lg:mb-3 font-extrabold leading-[1.4em]
         text-[#000F5C]" title="Transforming Ideas into Powerful Digital Experiences" />
        <Paragraph title="At Bibow.com, we bring ideas to life with expert game development, app development, and web development services. Whether you're looking for an immersive game, a powerful mobile app, or a sleek, high-performing website, we deliver innovative, custom solutions tailored to your needs. Let’s build the future together!" className="text-[#666F9D] mb-10 md:mb-14 xl:mb-10 text-[20px] leading-[30px]" />
        <div className="space-y-6 mb-16 xl:mb-12" >
          <CheckPoint text="Custom Game, App & Web Development" />
          <CheckPoint text="End-to-End Development Services" />
        </div>
        <Button text="Contact Us" className="text-white text-base font-bold px-7 py-4 bg-[#0d6efd] hover:bg-black cursor-pointer rounded-lg transition-all duration-500" />
      </div>
    </div>
  )
}

import React from 'react'
import Button from '../Custom/Button/Button'
import Heading from '../Custom/Heading/Heading'
import Paragraph from '../Custom/Paragragh/Paragraph'
import aboutusimg from '../../assets/about-seven.png'
import Image from '../Custom/Image/Image'
import CheckPoint from '../CheckPoint/CheckPoint'

export default function AboutUs() {
  return (
    <div className="mt-[11em] md:mt-[25em]    mx-3 xl:mx-0" id='aboutus'>
      <div>
        <Image image={aboutusimg} className="w-full" />
      </div>
      <div className="mt-12">
        <Button className=" bg-[#FF7A41] mb-6 text-white  font-[750] md:font-[850] text-[16px]  p-[14px] rounded-[6px]" text="02 What We Do" />
        <Heading className="text-[60px] md:text-[50px] lg:text-[85px] lg:font-[900] xl:text-[90px] 
        lg:leading-[115px] xl:leading-[95px] md:leading-[1.11em] mb-6 font-extrabold leading-[1.4em]
         text-[#000F5C]" title="Relational DataBase is What We Do" />
        <Paragraph title="Maecenas tincidunt ex quis arcu ultrices, et commodo diam
        volutpat. Fusce ligula mauris, sodales" className="text-[#666F9D] mb-10 md:mb-14 text-[20px] leading-[30px]" />
        <div className="space-y-6 mb-16" >
          <CheckPoint text="Access Any Data Flexible and easily" />
          <CheckPoint text="Access Any Data Flexible and easily" />
        </div>
        <Button text="Start Free Trail" className="text-white text-base font-bold px-7 py-4 bg-[#0d6efd] hover:bg-black cursor-pointer rounded-lg transition-all duration-500" />

      </div>
    </div>
  )
}

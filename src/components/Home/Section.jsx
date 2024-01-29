import React from 'react'
import Heading from '../Custom/Heading/Heading'
import Button from '../Custom/Button/Button'
import Paragraph from '../Custom/Paragragh/Paragraph'
import Image from '../Custom/Image/Image'
import img from '../../assets/bgHome.png'

export default function Section() {
  return (
    <>
    <div className="mt-[3.5em] mx-5">
      <Button className=" bg-[#FF7A41] mb-6 text-white  font-[750] text-[16px]  p-[14px] rounded-[6px]" text="01 provide Best Services" />
      <Heading className="text-[60px] mb-6 font-extrabold leading-[1.4em] text-[#000F5C]" title="Big data will Come up with A Solution" />
      <Paragraph title="Maecenas tincidunt ex quis arcu ultrices, et commodo diam
        volutpat. Fusce ligula mauris, sodales" className="text-[#666F9D] mb-10 text-[20px] leading-[30px]" />
      <Button text="Start Free Trail" className="text-white text-base font-bold px-7 py-4 bg-[#104CBA] hover:bg-black cursor-pointer rounded-lg transition-all duration-500" />

    </div>
    <div className="mx-5 mt-4">
      <Image image={img} />
    </div>
    </>
  )
}

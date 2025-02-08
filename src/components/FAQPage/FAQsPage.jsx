import React from 'react'
import Button from '../Custom/Button/Button'
import Heading from '../Custom/Heading/Heading'
import Paragraph from '../Custom/Paragragh/Paragraph'
import FAQs from '../FAQs/FAQs'
import Image1 from '../../assets/hicon4.png'
import Image2 from '../../assets/faq-triangle.png'
import './FAQsPage.css'

const FAQsPage = () => {
  return (
    <div className='flex-col flex xl:flex-row mt-32 px-2 xl:px-44 gap-20 relative' id='faq'>
      <div className="xl:w-1/2">
        <FAQs />
      </div>
      <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2000" className="xl:w-1/2 px-4 xl:px-0">
        <Button className=" bg-[#FF7A41] mb-6 text-white font-[750] md:font-[850] text-[16px] p-[14px] rounded-[6px]" text="FAQ" />
        <Heading className="text-4xl md:text-[48px] lg:font-[900] mb-6 font-extrabold leading-[1.4em] text-[#000F5C]"
          title="Any Questions about Mobile App & Web Development?" />
        <Paragraph
          title="Have queries about building mobile apps or websites? We specialize in crafting scalable, high-performance solutions tailored to your business needs. Let's explore your questions together!"
          className="text-[#666F9D] mb-10 md:mb-14 text-[20px] leading-[30px]" />
      </div>

      <div className="hidden sm:block absolute sm:bottom-0 sm:left-2 xl:left-auto xl:bottom-auto xl:top-0 xl:right-80 faqImg">
        <img src={Image1} alt="sideimg" />
      </div>
      <div className="hidden sm:block absolute sm:bottom-5 sm:left-40 xl:bottom-32 xl:left-20 zoom-in-zoom-out">
        <img src={Image2} alt="sideimg" />
      </div>
    </div>
  )
}

export default FAQsPage
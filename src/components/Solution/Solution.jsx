import React from 'react'
import Button from '../Custom/Button/Button'
import Heading from '../Custom/Heading/Heading'
import Paragraph from '../Custom/Paragragh/Paragraph'
import solutionImg from '../../assets/solution-place-600x374.png'
import BgSolution from '../../assets/counter-bg.png'
import Counter from '../Counter/Counter'

const Solution = () => {
    const backgroundStyle = {
        backgroundImage: `url(${BgSolution})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="relative">
            <div className="px-4 xl:px-40 xl:absolute top-0 left-0 right-0 ">
                <Counter />
            </div>
            <div style={backgroundStyle} className=' flex flex-col xl:flex-row xl:items-center justify-evenly px-4 xl:px-40 xl:pt-72 xl:pb-40'>
                <div className="pt-20 xl:w-1/2" data-aos="fade-right" data-aos-offset="0" data-aos-duration="1000">
                    <Button className=" bg-[#FF7A41] mb-6 text-white  font-[750] md:font-[850] text-[16px]  p-[14px] rounded-[6px]" text="04 Solution Place" />
                    <Heading className="text-4xl sm:text-[48px] mb-6 font-extrabold leading-[1.4em] text-[#000F5C]" title="A one place solution for All your problems" />
                    <Paragraph title="Pellentesque purus neque, pretium non purus vitae, commodo cursus libero. Praesent eget tempor est. Aliquam molestie erat vitae faucibus volutpat" className="text-[#666F9D] mb-10 md:mb-14 text-[20px] leading-[30px]" />
                    <Button text="Learn Click Here" className="text-white text-base font-bold px-7 py-4 bg-[#0d6efd] hover:bg-black cursor-pointer rounded-lg transition-all duration-500" />
                </div>
                <div className="xl:w-1/2 mt-10 md:mt-0 flex justify-end" data-aos="fade-left" data-aos-offset="0" data-aos-duration="1000">
                    <img src={solutionImg} className='object-contain' alt="imagee" />
                </div>
            </div >
        </div>
    )
}

export default Solution
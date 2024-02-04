import React, { useEffect, useState } from 'react'
import Heading from '../Custom/Heading/Heading'
import Button from '../Custom/Button/Button'
import Paragraph from '../Custom/Paragragh/Paragraph'
import Image from '../Custom/Image/Image'
import img from '../../assets/bgHome.png'
import { Fade } from 'react-reveal';
import icon1 from '../../assets/web-maintenance.png'
import BgSection from '../../assets/hero-seven-bg-1-1.png'
import shape1 from '../../assets/hero-shape1.png'
import shape2 from '../../assets/hero-shape2.png'

export default function Section() {
  const [shouldShowBackground, setShouldShowBackground] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowBackground(window.innerWidth >= 1280);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: shouldShowBackground ? `url(${BgSection})` : `url(${BgSection})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  // Custom Styles
  const customStyles = `
    .absolute-div {
      text-align: left;
      border-radius: 10px;
      left: 15%;
      top: 0;
      animation-name: bounce;
      animation-duration: 7.3s;
      animation-iteration-count: infinite;  /* Make the animation repeat indefinitely */
      animation-timing-function: ease-in-out;
      z-index: 2; // Ensure the div is above the image
    }
    @keyframes bubbleMover {
      0% {
          -webkit-transform: translateY(0px) translateX(0) rotate(0);
          transform: translateY(0px) translateX(0) rotate(0);
      }
      30% {
          -webkit-transform: translateY(30px) translateX(50px) rotate(15deg);
          transform: translateY(30px) translateX(50px) rotate(15deg);
          -webkit-transform-origin: center center;
          transform-origin: center center;
      }
      50% {
          -webkit-transform: translateY(50px) translateX(100px) rotate(45deg);
          transform: translateY(50px) translateX(100px) rotate(45deg);
          -webkit-transform-origin: right bottom;
          transform-origin: right bottom;
      }
      80% {
          -webkit-transform: translateY(30px) translateX(50px) rotate(15deg);
          transform: translateY(30px) translateX(50px) rotate(15deg);
          -webkit-transform-origin: left top;
          transform-origin: left top;
      }
      100% {
          -webkit-transform: translateY(0px) translateX(0) rotate(0);
          transform: translateY(0px) translateX(0) rotate(0);
          -webkit-transform-origin: center center;
          transform-origin: center center;
      }
  }
    .absoluteimg {
      text-align: left;
      border-radius: 10px;
      animation-name: bubbleMover;
      animation-duration: 9s;
      animation-iteration-count: infinite;  /* Make the animation repeat indefinitely */
      animation-timing-function: linear;
      z-index: 11; // Ensure the div is above the image
    }
    .absolute-div1 {
      text-align: left;
      border-radius: 10px;
      left: 0;
      top: 133px;
      animation-name: shakeX;
      animation-duration: 16.3s;
      animation-iteration-count: infinite;  /* Make the animation repeat indefinitely */
      animation-timing-function: ease-in-out;
      z-index: 1; // Ensure the div is above the image
    }
    .absolute-div2 {
      text-align: left;
      border-radius: 10px;

      animation-name: shakeY;
      animation-duration: 16.3s;
      animation-iteration-count: infinite;  /* Make the animation repeat indefinitely */
      animation-timing-function: ease-in-out;
      z-index: 1; // Ensure the div is above the image
    }
    @keyframes shakeY {
      0%,to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  
      10%,30%,50%,70%,90% {
          -webkit-transform: translate3d(0,-10px,0);
          transform: translate3d(0,-10px,0)
      }
  
      20%,40%,60%,80% {
          -webkit-transform: translate3d(0,10px,0);
          transform: translate3d(0,10px,0)
      }
  }
  
  .animate__shakeY {
      -webkit-animation-name: shakeY;
      animation-name: shakeY
  }
    @keyframes shakeX {
      0%,to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0)
      }
  
      10%,30%,50%,70%,90% {
          -webkit-transform: translate3d(-10px,0,0);
          transform: translate3d(-10px,0,0)
      }
  
      20%,40%,60%,80% {
          -webkit-transform: translate3d(10px,0,0);
          transform: translate3d(10px,0,0)
      }
  }
  
  .animate__shakeX {
      -webkit-animation-name: shakeX;
      animation-name: shakeX
  }
    .image-container {
      position: relative;
      overflow: hidden; /* Ensure the image does not overflow the container */
    }

    .image-container .image-above {
      position: absolute;
      bottom: -100px; /* Adjust as needed to position the image */
      left: 50%;
      transform: translateX(-50%);
      z-index: 10; /* Ensure the image is above the div */
    }

    .image-overlay {
      position: relative;
      z-index: 2; // Lower z-index than the div
    }

    @keyframes bounce {
      20%, 53%, 80%, 0%, 100% {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0);
      }
      40%, 43% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -30px, 0);
      }
      70% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -15px, 0);
      }
      90% {
        transform: translate3d(0, -4px, 0);
      }
    }
  `;
  // @keyframes bounce {
  //   0%, 100% {
  //     transform: translateY(0);
  //   }
  //   50% {
  //     transform: translateY(-20px);
  //   }
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className='xl:flex relative' style={backgroundStyle} id='hero'>
        <div className="hidden xl:block">
          <img src={shape1} alt="" className="absolute top-[100px] left-[100px] absoluteimg " />
        </div>
        <Fade left>
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="6000" className="mt-[3.5em]  md:mt-[7em] xl:mt-[6em] md:mx-10 xl:ml-60 xl:w-[50%]   mx-5 xl:mx-0">
          <Button className=" bg-[#FF7A41] mb-6 text-white  font-[750] md:font-[850] text-[16px]  p-[14px] rounded-[6px]" text="01 provide Best Services" />
          <Heading className="text-[60px] md:text-[90px] lg:text-[85px] lg:font-[900] xl:text-[90px] lg:leading-[115px] xl:leading-[95px] md:leading-[1.11em] mb-6 font-extrabold leading-[1.4em] text-[#000F5C]" title="Big data will Come up with A Solution" />
          <Paragraph title="Maecenas tincidunt ex quis arcu ultrices, et commodo diam
        volutpat. Fusce ligula mauris, sodales" className="text-[#666F9D] mb-10 md:mb-14 text-[20px] leading-[30px] md:w-[34rem]" />
          <Button text="Start Free Trail" className="text-white text-base font-bold px-7 py-4 bg-[#0d6efd] hover:bg-black cursor-pointer rounded-lg transition-all duration-500" />

        </div>
        </Fade>
        <div className="hidden xl:block">
          <img src={shape2} alt="" className="absolute top-[105px] left-[870px] absoluteimg " />
        </div>
        <Fade right>
        <div className="mx-5  h-[350px] mt-8 md:mt-28 relative xl:w-[50%] xl:pr-4 ">
          <Image image={img} className="overflow-clip" />
          <div className="flex max-w-[240px]  bg-transparent shadow-md  absolute p-4 md:bg-white md:shadow-lg md:bg-opacity-75  absolute-div">
            <div className="flex justify-center items-center gap-4">
              {/* <i aria-hidden="true" className="flaticon flaticon-web-maintenance"></i> */}
              <Image image={icon1} className="w-12 h-12" alt="" />
              <div>
                <h4 className="text-black text-xl">Game Development</h4>
                <span></span>
              </div>
            </div>
          </div>
          <div className="flex max-w-[260px] shadow-md bg-transparent absolute p-4 md:bg-opacity-75 md:bg-white md:shadow-lg  absolute-div1">
            <div className="flex justify-center items-center gap-4">
              {/* <i aria-hidden="true" className="flaticon flaticon-web-maintenance"></i> */}
              <Image image={icon1} className="w-12 h-12" alt="" />
              <div>
                <h4 className="text-black text-xl">App Development</h4>
                <span></span>
              </div>
            </div>
          </div>
          <div className="flex max-w-[260px]   shadow-md  bg-transparent absolute left-0 md:bg-opacity-75 md:bg-white md:shadow-lg top-[275px] md:left-[15%] md:top-[79%] lg:top-[100%] p-4 absolute-div2">
            <div className="flex justify-center items-center gap-4">
              {/* <i aria-hidden="true" className="flaticon flaticon-web-maintenance"></i> */}
              <Image image={icon1} className="w-12 h-12" alt="" />
              <div>
                <h4 className="text-black text-xl">Web Devlopment</h4>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </>
  )
}

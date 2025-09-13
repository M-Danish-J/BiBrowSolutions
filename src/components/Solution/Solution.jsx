import React, { useEffect, useState, useRef } from "react";
import Button from "../Custom/Button/Button";
import Heading from "../Custom/Heading/Heading";
import Paragraph from "../Custom/Paragragh/Paragraph";
import solutionImg from "../../assets/solution-place-600x374.png";
import BgSolution from "../../assets/counter-bg.png";
import Counter from "../Counter/Counter";

const Solution = () => {
  const [counterInView, setCounterInView] = useState(false);
  const counterRef = useRef(null);

  const backgroundStyle = {
    backgroundImage: `url(${BgSolution})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0, // When 50% of the counter is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounterInView(true);
        }
      });
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {counterInView && (
        <div className="px-4 xl:px-40 xl:absolute top-0 left-0 right-0">
          <Counter />
        </div>
      )}
      <div ref={counterRef}></div>
      <div
        style={backgroundStyle}
        className="flex flex-col xl:flex-row xl:items-center justify-evenly px-4 xl:px-40 xl:pt-72 xl:pb-40"
      >
        <div
          className="pt-20 xl:w-1/2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <Button
            className="bg-[#FF7A41] mb-6 text-white font-[750] md:font-[850] text-[16px] p-[14px] rounded-[6px]"
            text="Solution Place"
          />
          <Heading
            className="text-4xl sm:text-[48px] mb-6 font-extrabold leading-[1.4em] text-[#000F5C]"
            title="Innovative Solutions for App, Web & Game Development"
          />
          <Paragraph
            title="We specialize in crafting dynamic websites, feature-rich mobile applications, and immersive gaming experiences. Whether it's a startup or enterprise, we bring your vision to life with creativity, technology, and precision."
            className="text-[#666F9D] mb-10 md:mb-14 text-[20px] leading-[30px]"
          />
          <Button
            text="Learn Click Here"
            className="text-white text-base font-bold px-7 py-4 bg-[#0d6efd] hover:bg-black cursor-pointer rounded-lg transition-all duration-500"
          />
        </div>
        <div
          className="xl:w-1/2 mt-10 md:mt-0 flex justify-end"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img src={solutionImg} className="object-contain" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Solution;

import React from "react";
import img from "../../assets/footer-call-action.png";
import bgimg from "../../assets/footer-call-action-bg.png";
import Paragraph from "../Custom/Paragragh/Paragraph";
import Button from "../Custom/Button/Button";

export default function FooterSection() {
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      className="xl:flex xl:justify-center xl:items-center"
    >
      <div
        className="bg-[#F8FBFF] p-3 md:flex xl:max-w-6xl xl:items-center "
        style={{
          backgroundImage: `url(${bgimg})`, // Corrected line
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <img src={img} alt="" />
        </div>
        <div className="mt-14 md:mt-0 md:flex md:flex-col md:justify-center md:items-start gap-y-9 lg:gap-y-11 mx-7">
          <Paragraph
            className=" capitalize text-[26px] xl:text-[32px] leading-[1.3em] text-[#000F5C] font-[700] lg:w-96 xl:w-[450px]"
            title="Elevate Your Ideas with Expert Mobile, Game & Web Development"
          />
          <Button
            text="Learn Click Here"
            className="text-white my-14 md:my-0 text-base font-bold px-7 py-4 bg-[#0d6efd] hover:bg-black cursor-pointer rounded-lg transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}

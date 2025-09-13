import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import footerbg from "../../assets/footer-bg.png";
import { IoIosSend } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { BiPhone } from "react-icons/bi";

export default function Footer() {
  const backgroundStyle = {
    backgroundImage: `url(${footerbg})`,

    backgroundPosition: "center",
  };
  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailIsValid(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (message.trim() === "") {
      toast.error("Please enter a message.");
      return;
    }
    const values = { email, message };
    emailjs
      .send("service_9izmep3", "template_l3q9crb", values, "NoMSHdZ8hBy4kNigW")
      .then((response) => {
        console.log("Email sent:", response);
        toast.success("Email Sent Successfully! Thank You For Contacting Us!");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email error:", error);
        toast.error("Failed to send email. Please try again later.");
      });
  };
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="bg-[transparent !important] pb-14 px-4 md:px-12 lg:px-16 pt-16 shadow-xl"
      style={backgroundStyle}
    >
      <div className=" xl:flex">
        <div className="md:flex xl:w-1/2">
          <div className="md:w-1/2">
            <h1 className="text-[#1D2C38] text-[28px] leading-4 mb-10 font-[750]">
              Bibrow
            </h1>
            <p className="text-[#74787C] mb-4 md:text-[20px] font-semibold leading-normal">
              At Bibrow Solutions, we are about technology and dedicated to
              providing IT solutions for businesses of all sizes.
            </p>
            <div className="flex justify-start gap-3 mt-8">
              <div className="w-[45px] h-[45px]  leading-[45px] text-center bg-[#223452] flex justify-center items-center  rounded-[50%]">
                <FaLocationDot className="text-[#bdc2cb] " />
              </div>
              <p className="text-[#74787C] font-semibold w-48">
                Al Rehman Garden Phase 2 Gate No. 4{" "}
              </p>
            </div>
          </div>
          <div className="flex md:w-1/2 flex-col md:justify-center md:items-center xl:justify-start mx-auto ">
            <div>
              <h1 className="capitalize text-[#1D2C38] text-[28px] leading-4 mt-8 md:mt-0 mb-10 font-[750]">
                Page Links
              </h1>
              <div className="text-start">
                <p className="capitalize text-[#74787C] text-[18px] my-3 leading-normal cursor-pointer  font-semibold">
                  Service
                </p>
                <p className="capitalize text-[#74787C] text-[18px] my-3 leading-normal cursor-pointer font-semibold">
                  Portfolio
                </p>
                <p className="capitalize text-[#74787C] text-[18px] my-3 leading-normal cursor-pointer font-semibold">
                  About Us
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:mt-16 xl:mt-0 lg:pl-10 ">
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h1 className="text-[#1D2C38] text-[28px] leading-4 mb-10 font-[750]">
              Contacts
            </h1>
            <div>
              <div className="flex items-center justify-start gap-3 mb-5 text-[#74787C] ">
                <FaLocationDot className="cursor-pointer w-6 h-6" />
                <p className="w-48 md:w-full md:font-semibold text-[17px] cursor-pointer">
                  Lahore
                </p>
              </div>
              <div className="flex items-center justify-start gap-3 mb-5 text-[#74787C] ">
                <IoIosTime className="cursor-pointer w-6 h-6" />
                <p className="w-48 md:w-full md:font-semibold text-[17px] cursor-pointer">
                  Mon-Friday 9:00 A-M - 7:00 P-M
                </p>
              </div>
              <div className="flex items-center justify-start gap-3 mb-5 text-[#74787C] ">
                <IoMdMail className="cursor-pointer w-6 h-6" />
                <p className="w-48 md:w-full md:font-semibold text-[17px] cursor-pointer">
                  bibrowsolutionpvtlimited@gmail.com
                </p>
              </div>
              <div className="flex items-center justify-start gap-3 mb-5 text-[#74787C] ">
                <BiPhone className="cursor-pointer w-6 h-6" />
                <p className="w-48 md:w-full md:font-semibold text-[17px] cursor-pointer">
                  03394467795
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFF] rounded-md flex flex-col justify-center xl:justify-start md:pt-8 items-center md:w-1/2 shadow">
            <h1
              id="contactus"
              className="text-[#1D2C38] text-[28px] leading-4 mb-10 font-[750] pt-16 md:pt-0"
            >
              Contact Us
            </h1>
            <p className="text-center px-9 text-[#74787C] xl:text-lg capitalize mb-3">
              are you interested in following our particular website
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-center gap-2 pb-6"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="bg-transparent md:w-64 lg:w-96 xl:w-64 lg:h-16 xl:h-14 border border-[#90a6c2] h-12 rounded-lg text-start px-6 text-[#666F9D] focus:outline-none"
                placeholder="Enter Your Email"
                name="email"
              />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent  border h-32 pt-2 border-[#90a6c2] rounded-lg text-start px-6 w-full text-[#666F9D] focus:outline-none"
                placeholder="Type Message"
                name="message"
              />
              <button
                className="bg-[#4d79cc] hover:bg-[#3e66ae] px-3 py-2 text-white gap-2 flex justify-center my-2 items-center rounded-lg "
                type="submit"
              >
                {" "}
                Send
                <IoIosSend className="w-7 h-7 text-white cursor-pointer" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" p-7 mt-20 md:justify-center md:items-center bg-[#F8FBFF] rounded-md flex flex-col md:flex md:flex-row justify-center mx-auto items-center shadow z-20">
        <div className="md:w-1/2">
          <p className="text-[18px] mx-auto text-center lg:text-start font-semibold text-[#000F5C]">
            @ Copyright {currentYear} Bibrow Soluton's All Rights Reserved
          </p>
        </div>
        <div className="flex md:w-1/2 capitalize  justify-center items-center text-[#000F5C] text-[16px] font-normal flex-wrap text-right mt-5 gap-6 lg:gap-8 md:pl-16 ">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/BibrowSol"
            className="font-normal xl:text-lg cursor-pointer"
          >
            Facebook
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/company/bibrow-solution/"
            target="_blank"
            className="font-normal xl:text-lg cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            rel="noreferrer"
            href="https://www.tiktok.com/@bibrowsolutionpvt"
            target="_blank"
            className="font-normal xl:text-lg cursor-pointer"
          >
            Tiktok
          </a>
        </div>
      </div>
    </div>
  );
}

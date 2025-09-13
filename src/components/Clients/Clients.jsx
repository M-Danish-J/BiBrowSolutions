import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Button from "../Custom/Button/Button";
import Heading from "../Custom/Heading/Heading";

import client1 from "../../assets/10gan games.png";
import client2 from "../../assets/Climax Game Studios.png";
import client3 from "../../assets/Frenzy Games Studios.jpg";
import client4 from "../../assets/RockRex Games.png";

const Clients = () => {
  const logos = [
    { src: client1, alt: "10gan Games" },
    { src: client2, alt: "Climax Game Studios" },
    { src: client3, alt: "Frenzy Games Studios" },
    { src: client4, alt: "RockRex Games" },
    { src: client1, alt: "10gan Games (repeat)" },
    { src: client2, alt: "Climax Game Studios (repeat)" },
    { src: client3, alt: "Frenzy Games Studios (repeat)" },
    { src: client4, alt: "RockRex Games (repeat)" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 6,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <section
      id="clients"
      className="my-16 sm:mx-7 lg:mx-32 xl:mx-40"
      aria-labelledby="clients-heading"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="px-4 md:text-center">
        <Button
          className="bg-[#FF7A41] mb-6 text-white font-[750] text-[16px] px-4 py-[10px] rounded-[6px]"
          text="Our Clients"
        />
      </div>

      <Heading
        id="clients-heading"
        className="px-4 xl:px-52 text-3xl md:text-[44px] mb-10 font-extrabold md:text-center leading-[1.4em] text-[#000F5C]"
        title="Trusted by innovative teams and studios"
      />

      <div className="px-4">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          arrows={false}
          draggable
          swipeable
          showDots={false}
          keyBoardControl
          itemClass="px-3"
          containerClass="pb-6"
          renderButtonGroupOutside={false}
        >
          {logos.map((logo, idx) => (
            <figure
              key={idx}
              className="group flex items-center justify-center h-28 md:h-32 rounded-2xl border border-gray-200/70 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-16 md:max-h-20 object-contain opacity-80 group-hover:opacity-100 transition duration-300 px-4"
              />
            </figure>
          ))}
        </Carousel>
      </div>

      {/* subtle divider to match section rhythm */}
      <div className="mt-8 mx-4 border-t border-gray-100" />
    </section>
  );
};

export default Clients;

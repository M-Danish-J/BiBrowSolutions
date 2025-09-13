import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Home/Section";
import Testimonial from "../components/Testimonial/Testimonial";
import FAQsPage from "../components/FAQPage/FAQsPage";
import Service from "../components/Servicee/Service";
import AboutUs from "../components/About/AboutUs";
import Solution from "../components/Solution/Solution";
import UpButton from "../components/Up/UpButton";
import Footer from "../components/Footer/Footer";
import FooterSection from "../components/FooterSection/FooterSection";
import Clients from "../components/Clients/Clients";

export default function Home() {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.4;

      setShowUpButton(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    const preventContextMenu = (event) => {
      event.preventDefault();
    };

    const preventInspectKeys = (event) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey &&
          event.shiftKey &&
          (event.key === "I" || event.key === "J" || event.key === "C")) ||
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    };

    // document.addEventListener("contextmenu", preventContextMenu);
    // document.addEventListener("keydown", preventInspectKeys);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventInspectKeys);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Section />
      <AboutUs />
      <Service />
      <Solution />
      <Clients />
      <FAQsPage />
      <Testimonial />
      {showUpButton && (
        <div className="fixed md:bottom-12 md:right-12 bottom-4 right-4">
          <UpButton />
        </div>
      )}
      {/* <Blog /> */}
      <FooterSection />
      <Footer />
    </div>
  );
}

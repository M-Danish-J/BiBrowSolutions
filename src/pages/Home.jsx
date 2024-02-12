import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Section from '../components/Home/Section'
import Testimonial from '../components/Testimonial/Testimonial'
import FAQsPage from '../components/FAQPage/FAQsPage'
import Service from '../components/Servicee/Service'
import AboutUs from '../components/About/AboutUs'
import Solution from '../components/Solution/Solution'
import UpButton from '../components/Up/UpButton'
import Footer from '../components/Footer/Footer'
import FooterSection from '../components/FooterSection/FooterSection'

export default function Home() {
    const [showUpButton, setShowUpButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const scrollThreshold = windowHeight * 0.4;

            setShowUpButton(scrollTop > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <Section />
            <AboutUs />
            <Service />
            <Solution />
            <FAQsPage />
            <Testimonial />
            {showUpButton && (
                <div className="fixed md:bottom-12 md:right-12 bottom-4 right-4">
                    <UpButton />
                </div>
            )}
            <FooterSection />
            <Footer />

        </div>
    )
}

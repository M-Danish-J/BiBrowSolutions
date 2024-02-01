import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Section from '../components/Home/Section'
import Testimonial from '../components/Testimonial/Testimonial'
import FAQsPage from '../components/FAQPage/FAQsPage'
import Service from '../components/Servicee/Service'
import AboutUs from '../components/About/AboutUs'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Section />
            <AboutUs />
            <Service />
            <FAQsPage />
            <Testimonial />
        </div>
    )
}

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Section from '../components/Home/Section'
import Testimonial from '../components/Testimonial/Testimonial'
import FAQsPage from '../components/FAQPage/FAQsPage'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Section />
            <FAQsPage />
            <Testimonial />
        </div>
    )
}

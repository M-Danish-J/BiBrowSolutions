import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className='space-y-6'>
            <Accordion
                q='What services do you offer for mobile app development?'
                a='We provide end-to-end mobile app development services, including UI/UX design, native and cross-platform development, testing, deployment, and maintenance.'
                isOpen={openIndex === 0}
                onClick={() => handleAccordionClick(0)}
            />
            <Accordion
                q='How long does it take to develop a mobile or web application?'
                a='The development timeline depends on the complexity of the project. A basic app may take 4-6 weeks, while a more complex application could take several months.'
                isOpen={openIndex === 1}
                onClick={() => handleAccordionClick(1)}
            />
            <Accordion
                q='Do you provide post-launch support and maintenance?'
                a='Yes, we offer ongoing maintenance and support to ensure your app or website stays updated, secure, and performs optimally.'
                isOpen={openIndex === 2}
                onClick={() => handleAccordionClick(2)}
            />
        </div>
    );
};

export default FAQs;

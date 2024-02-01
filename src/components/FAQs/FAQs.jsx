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
                q='What are the questions for data science?'
                a='Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.'
                isOpen={openIndex === 0}
                onClick={() => handleAccordionClick(0)}
            />
            <Accordion
                q='What are the questions for data science?'
                a='Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.'
                isOpen={openIndex === 1}
                onClick={() => handleAccordionClick(1)}
            />
            <Accordion
                q='What are the questions for data science?'
                a='Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.'
                isOpen={openIndex === 2}
                onClick={() => handleAccordionClick(2)}
            />
        </div>
    );
};

export default FAQs;

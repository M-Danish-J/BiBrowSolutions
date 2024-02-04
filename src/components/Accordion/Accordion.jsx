import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import './Accordion.css';

const Accordion = ({ q, a, isOpen, onClick }) => {
    const [iconRotated, setIconRotated] = useState(isOpen);

    const toggleAccordion = () => {
        setIconRotated(!iconRotated);
        onClick();
    };

    return (
        <div className='px-2 md:px-7 md:py-4 shadow-lg border'>
            <div
                onClick={toggleAccordion}
                className='flex items-center justify-between text-xl font-medium cursor-pointer text-[#000F5C] py-5'
            >
                <p className=''>{q}</p>
                <div className={`icon-container transition-transform ${iconRotated ? 'rotate' : ''}`}>
                    {iconRotated ? <GoArrowRight /> : <BsPlusLg />}
                </div>
            </div>
            <p className={`paragraph ${isOpen ? 'open' : ''}`}>
                {a}
            </p>
        </div>
    );
};

export default Accordion;

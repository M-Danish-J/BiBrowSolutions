  import React, { useState, useEffect } from 'react';
  import { useSpring, animated } from '@react-spring/web';

  const AnimatedCounter = ({ Count,symbol,desc,animation,speed }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById('animatedCounter');
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the component is in the viewport
        if (top < windowHeight && top > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      // Listen to the scroll event on mount
      window.addEventListener('scroll', handleScroll);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use the count value only when the component is visible
    const countValue = isVisible ? parseInt(Count.replace('+', ''), 10) : 0;

    const countSpring = useSpring({
      from: { count: 0 },
      to: { count: countValue },
      config: { duration: speed }, // Adjust the duration as needed
    });

    return (
      <div id="animatedCounter" className={`text-center ${animation}`}>
        <animated.h1 className={`text-black lg:text-[40px] md:text-[32px] text-[28px] font-bold  ${animation}`}>
          {countSpring.count.interpolate((val) => `${Math.floor(val)}${symbol}`)}
        </animated.h1>
      </div>
    );
  };

  export default AnimatedCounter;

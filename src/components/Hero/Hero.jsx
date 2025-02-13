import React from 'react';
import './Hero.css';

// Import the arrow icon
import darkArrow from '../../../public/assets/dark-arrow.png';

const Hero = () => {
    return (
        <div className='container hero'>
            <div className="hero-text">
                <h1>Future of Simultaneous Learning</h1>
                <p>Unlock the future of education and workforce development to expand access to training, reach students wherever they are with our integrated learning platform.</p>
                <button className='btn'>
                    Explore More <img src={darkArrow} alt="dark-arrow" />
                </button>
            </div>
        </div>
    );
};

export default Hero;

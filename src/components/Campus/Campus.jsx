import React from 'react';
import './Campus.css';

import galleryImage1 from '../../../public/assets/gallery-1.png';
import galleryImage2 from '../../../public/assets/gallery-2.png';
import galleryImage3 from '../../../public/assets/gallery-3.png';
import galleryImage4 from '../../../public/assets/gallery-4.png';
import whiteArrow from '../../../public/assets/white-arrow.png';

const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={galleryImage1} alt="galleryImage1" />
                <img src={galleryImage2} alt="galleryImage2" />
                <img src={galleryImage3} alt="galleryImage3" />
                <img src={galleryImage4} alt="galleryImage4" />
            </div>
            <button className='btn dark-btn'>
                See More here <img src={whiteArrow} alt="whiteArrow" />
            </button>
        </div>
    );
};

export default Campus;

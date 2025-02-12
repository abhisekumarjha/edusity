import React from 'react'
import './Campus.css'

const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={"src/assets/gallery-1.png"} alt="galleryImage" />
                <img src={"src/assets/gallery-2.png"} alt="galleryImage" />
                <img src={"src/assets/gallery-3.png"} alt="galleryImage" />
                <img src={"src/assets/gallery-4.png"} alt="galleryImage" />
            </div>
            <button className='btn dark-btn'>See More here <img src={"src/assets/white-arrow.png"} alt="whiteArrow" /> </button>
        </div>
    )
}

export default Campus
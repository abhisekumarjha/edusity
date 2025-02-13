import React, { useRef } from 'react';
import './Testimonials.css';

// Import images from 'public/assets'
import nextIcon from '../../../public/assets/next-icon.png';
import backIcon from '../../../public/assets/back-icon.png';
import user1 from '../../../public/assets/user-1.png';
import user2 from '../../../public/assets/user-2.png';
import user3 from '../../../public/assets/user-3.png';
import user4 from '../../../public/assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tX = 0;

    const slideForward = () => {
        if (tX > -50) {
            tX -= 25;
        }
        slider.current.style.transform = `translateX(${tX}%)`;
    };

    const slideBackward = () => {
        if (tX < 0) {
            tX += 25;
        }
        slider.current.style.transform = `translateX(${tX}%)`;
    };

    return (
        <div className='testimonials'>
            <img
                src={nextIcon}
                alt="next-icon"
                className='next-btn'
                onClick={slideForward}
            />
            <img
                src={backIcon}
                alt="back-icon"
                className='back-btn'
                onClick={slideBackward}
            />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="userImage" />
                                <div>
                                    <h3>Lily Brooks</h3>
                                    <span>LSEE, UK</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus quas soluta aut similique error, iusto illo eveniet.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="userImage" />
                                <div>
                                    <h3>Ethan Carter</h3>
                                    <span>Oxford House, Kolkata</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas ex provident?</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="userImage" />
                                <div>
                                    <h3>Mason Thompson</h3>
                                    <span>Educity, Bangalore</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum fuga labore qui, culpa impedit eaque expedita, obcaecati nobis, adipisci dolor porro.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="userImage" />
                                <div>
                                    <h3>Zoe Harrison</h3>
                                    <span>IBM, Mumbai</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis exercitationem debitis quae aliquid quam delectus. Cum temporibus nam ut quae.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;

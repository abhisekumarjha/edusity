import React from 'react'
import './Footer.css'

const Footer = () => {
    const currYear = new Date(Date.now()).getFullYear();

    return (
        <div className='footer'>
            <p>{`© ${currYear} Edusity. All rights reserved.`}</p>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    )
}

export default Footer
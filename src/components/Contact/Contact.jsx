import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2633e6fd-63ab-45d1-b17c-c2ea8add8872");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a Message <img src={"src/assets/msg-icon.png"} alt="msgIcon" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={"src/assets/mail-icon.png"} alt="mail-icon" /> Contact@GreatStack.dev</li>
                    <li><img src={"src/assets/phone-icon.png"} alt="phone-icon" />+1 123-456-7890</li>
                    <li><img src={"src/assets/location-icon.png"} alt="location-icon" />77 Massachusetts Ave, Cambridge<br />
                        MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" placeholder='Enter Full Name' required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="phone" placeholder='Enter Phone Number' required />
                    <label htmlFor="message">Write Us</label>
                    <textarea name="message" id="message" rows="5" placeholder='Message' required></textarea>
                    <button type="submit" className='btn dark-btn'>Submit <img src={"src/assets/white-arrow.png"} alt="white-arrow" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div >
    )
}

export default Contact
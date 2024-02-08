import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Contact(){
    return(
        <section id="Contact" className="contact--section">
            <div className="contact--section--container">
                <div className="contact--section--social--box" data-aos="slide-right">
                    <img className="contact--desktop--img--tanya" src="./images/port4.png" alt="Contac Me Tanya"></img>
                    <div className="contact--icon">
                        <a href="https://facebook.com" className="contact--icon-button">
                            <FaFacebookSquare className="icon fb--icon" />
                        </a>
                        <a href="https://instagram.com" className="contact--icon-button">
                            <FaInstagram className="icon insta--icon" />
                        </a>
                        <a href="https://twitter.com" className="contact--icon-button">
                            <FaXTwitter className="icon twitter--icon" />
                        </a>
                        <a href="https://linkedin.com" className="contact--icon-button">
                            <FaLinkedin className="icon link--icon" />
                        </a>
                    </div>
                </div>

                <div className="contact--section--content--box" data-aos="slide-left">
                   <div className="contact--section--input">
                       <div className="contact--box">
                            <h1 className="contact--title">Get in Touch</h1>
                            <div className="contact--line"></div>
                       </div>
                       <div className="contact--input--box">
                            <input className="contact--input contact--name"type="text" placeholder="Name" name="user_name" required />
                            <input className="contact--input contact--email"type="text" placeholder="Email" name="user_email" required />
                            <input className="contact--input contact--num"type="text" placeholder="Number" name="user_num" required />
                            <input className="contact--input contact--subject"type="text" placeholder="Subject" name="user_sub" required />
                            <input className="contact--input--msg"type="text" placeholder="Message" name="user_msg" required />

                            <button className="contact--section--btn">Send</button>
                       </div>
                       <div className="contact--icon--mobile">
                            <a href="https://facebook.com" className="contact--icon-button">
                                <FaFacebookSquare className="icon fb--icon" />
                            </a>
                            <a href="https://instagram.com" className="contact--icon-button">
                                <FaInstagram className="icon insta--icon" />
                            </a>
                            <a href="https://twitter.com" className="contact--icon-button">
                                <FaXTwitter className="icon twitter--icon" />
                            </a>
                            <a href="https://linkedin.com" className="contact--icon-button">
                                <FaLinkedin className="icon link--icon" />
                            </a>
                        </div>
                       
                      
                   </div>
                   <div className="contact--section--img">
                        <img className="contact--desktop--img--phone" src="./images/phone.png" alt="Phone"></img>
                        <img className="contact--desktop--img--laptop" src="./images/laptop.png" alt="Laptop"></img>
                   </div>
                </div>
            </div>
        </section>
    )
}
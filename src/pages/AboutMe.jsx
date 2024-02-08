import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function AboutMe(){
    
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--container">

                <div className="about--section--mobile">
                    <img className="about--mobile--img" src="./images/port2B.png" alt="About Me" data-aos="fade-left"></img>
                </div>

                <div className="about--section--content">
                    <div className="about--text--box">
                        <h1 className="about--text--title" data-aos="fade-down">ABOUT ME</h1>
                        <h2 className="about--text--intro" data-aos="fade-down">Hi, Tanya here</h2>
                        <p className="about--text--description" data-aos="fade-down">
                            Et enim voluptas 33 molestiae sunt est aperiam maxime eum omnis omnis.
                            Ea itaque vero 33 accusamus harum aut error doloribus. 
                            Aut ipsa praesentium sit delectus libero ut vero velit hic omnis 
                            provident et odit consequatur. Aut ipsa praesentium sit delectus libero ut vero velit hic omnis 
                            provident et odit consequatur.
                        </p>
                    </div>

                    <div className="about--section--icon" data-aos="zoom-out">
                        <a href="https://facebook.com" className="icon-button">
                            <FaFacebookSquare className="icon fb--icon" />
                        </a>
                        <a href="https://instagram.com" className="icon-button">
                            <FaInstagram className="icon insta--icon" />
                        </a>
                        <a href="https://twitter.com" className="icon-button">
                            <FaXTwitter className="icon twitter--icon" />
                        </a>
                        <a href="https://linkedin.com" className="icon-button">
                            <FaLinkedin className="icon link--icon" />
                        </a>
                    </div>
                </div>
              
                <div className="about--section--desktop">
                    <img className="about--desktop--img" src="./images/port2.png" alt="About Me" data-aos="fade-left"></img>
                </div>
            </div>
            
        </section>
    )
}
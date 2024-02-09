import { FaFileWord } from "react-icons/fa";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { SiLoom } from "react-icons/si";

export default function Works(){
    return(
        <section id="Works" className="works--section">
            <div className="works--section--container">
                 <div className="works--section--container--box--right" data-aos="slide-right">
                    <div className="works--section--content--box">
                        <img className="works--desktop--img" src="./images/works1.png" alt="Works"></img>
                        <div className="works--section--content">
                            <div className="works--txt--box">
                               <h1 className="works--title">Example Works Header</h1>
                               <p>Et enim voluptas 33 molestiae sunt est aperiam maxime eum omnis omnis.
                                  Ea itaque vero 33 accusamus harum aut error doloribus.Et enim voluptas 33 molestiae sunt est aperiam maxime eum omnis omnis.
                                  Ea itaque vero 33 accusamus harum aut error doloribus.
                                </p>
                            </div>
                            <div className="works--icon--box">
 
                                <FaFileWord className="works--icon word--icon" />
                                <PiMicrosoftTeamsLogoFill className="works--icon team--icon" />
                                <FcGoogle className="works--icon google--icon" />
                                <SiLoom className="works--icon loom--icon" />
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="works--section--container--box--left" data-aos="slide-left">
                    <div className="works--section--content--box--left">
                        <div className="works--section--content">
                            <div className="works--txt--box">
                               <h1 className="works--title">Example Works Header</h1>
                               <p>Et enim voluptas 33 molestiae sunt est aperiam maxime eum omnis omnis.
                                  Ea itaque vero 33 accusamus harum aut error doloribus.Et enim voluptas 33 molestiae sunt est aperiam maxime eum omnis omnis.
                                  Ea itaque vero 33 accusamus harum aut error doloribus.
                                </p>
                            </div>
                            <div className="works--icon--box">
 
                                <FaFileWord className="works--icon word--icon" />
                                <PiMicrosoftTeamsLogoFill className="works--icon team--icon" />
                                <FcGoogle className="works--icon google--icon" />
                                <SiLoom className="works--icon loom--icon" />
                            </div>
                        </div>
                        <img className="works--desktop--img" src="./images/works2.png" alt="Works"></img>
                    </div>
                 </div>

                 <div className="works--section--container--box--right" data-aos="slide-right">
                    <div className="works--section--content--box">
                        <img className="works--desktop--img" src="./images/works3.png" alt="Works"></img>
                        <div className="works--section--content">
                            <div className="works--txt--box">
                               <h1 className="works--title">Example Works Header</h1>
                               <p>Et enim voluptas 33 molestiae sunt est aperiam maxime eum omnis omnis.
                                  Ea itaque vero 33 accusamus harum aut error doloribus.Et enim voluptas 33 molestiae sunt est aperiam maxime eum omnis omnis.
                                  Ea itaque vero 33 accusamus harum aut error doloribus.
                                </p>
                            </div>
                            <div className="works--icon--box">
 
                                <FaFileWord className="works--icon word--icon" />
                                <PiMicrosoftTeamsLogoFill className="works--icon team--icon" />
                                <FcGoogle className="works--icon google--icon" />
                                <SiLoom className="works--icon loom--icon" />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    )
}
import { FaFileWord } from "react-icons/fa";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { SiLoom } from "react-icons/si";

export default function Works(){
    return(
        <section id="Works" className="works--section">
            <div className="works--section--container">
                 {/* Work 1 Right */}
                 <div className="works--section--container--box--right" data-aos="fade-right">
                    <div className="works--section--content--box">
                        <img className="works--desktop--img" src="./images/works1.png" alt="Works"></img>
                        
                        <div className="works--mobile">
                            <img className="works--mobile--img" src="./images/works1.png" alt="Works"></img>
                            <div className="works--mobile--icon--box">
                                <FaFileWord className="works--icon--mobile word--icon" />
                                <PiMicrosoftTeamsLogoFill className="works--icon--mobile team--icon" />
                                <FcGoogle className="works--icon--mobile google--icon" />
                                <SiLoom className="works--icon--mobile loom--icon" />
                            </div>
                        </div>
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
                 
                 {/* Work 2 Left */}
                 <div className="works--section--container--box--left" data-aos="fade-left">
                    <div className="works--section--content--box--left">

                        <div className="works--mobile--left">
                            <div className="works--mobile--icon--box">
                                <FaFileWord className="works--icon--mobile word--icon" />
                                <PiMicrosoftTeamsLogoFill className="works--icon--mobile team--icon" />
                                <FcGoogle className="works--icon--mobile google--icon" />
                                <SiLoom className="works--icon--mobile loom--icon" />
                            </div>
                            <img className="works--mobile--img" src="./images/works2.png" alt="Works"></img> 
                        </div>

                        <div className="works--section--content--left">
                            <div className="works--txt--box--left">
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

                 {/* Work 3 Right */}
                 <div className="works--section--container--box--right" data-aos="fade-right">
                    <div className="works--section--content--box">
                        <img className="works--desktop--img" src="./images/works3.png" alt="Works"></img>
                        
                        <div className="works--mobile">
                            <img className="works--mobile--img" src="./images/works3.png" alt="Works"></img>
                            <div className="works--mobile--icon--box">
                                <FaFileWord className="works--icon--mobile word--icon" />
                                <PiMicrosoftTeamsLogoFill className="works--icon--mobile team--icon" />
                                <FcGoogle className="works--icon--mobile google--icon" />
                                <SiLoom className="works--icon--mobile loom--icon" />
                            </div>

                        </div>
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
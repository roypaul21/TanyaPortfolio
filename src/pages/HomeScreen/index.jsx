import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import Services from "../Services";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home () {
    useEffect(()=> {
        AOS.init({offset: 200,
                  duration: 800,
                  easing: 'linear',
                  delay: 50,
        })
    }, [])
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Services />
        </>
    )
}
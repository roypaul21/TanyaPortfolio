import AboutMe from "../AboutMe";
import Contact from "../Contact";
import HeroSection from "../HeroSection";
import Services from "../Services";
import Works from "../Works"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


export default function Home () {
    useEffect(()=> {
        AOS.init({offset: 200,
                  duration: 800,
                  easing: 'ease-in-out',
                  delay: 50,
        })
    }, [])
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Services />
            <Works />
            <Contact />
        </>
    )
}
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Services from "../Services";
import Works from "../Works"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


export default function Home () {
    useEffect(()=> {
        AOS.init({offset: 100,
                  duration: 800,
                  easing: 'linear',
                  delay: 100,
                  anchorPlacement: 'top-bottom',
                  debounceDelay:50,
                  once: false,
                  mirror: true,
        })
    }, [])
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Services />
            <Works />
            <Contact />
            <Footer />
        </>
    )
}

export default function HeroSection() {
    
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--container">
                <div className="hero--section--img" data-aos="fade-right">
                    <img src="./images/port1.png" alt="Hero Section" />
                </div>
            
                <div className="hero--section--content--box">
                    <div className="hero--section--content">
                        <div className="section--text--box">
                            <h1 className="hero--section--title" data-aos='slide-down' >Empowered. Unstoppable. Fearless.</h1>
                            <p className="hero--section--body" data-aos='slide-down'>Lorem ipsum dolor sit amet Sit iste quia eos inventor molestiae sunt est aperiam.</p>
                        </div>
                        <button className="hero--sectiion--btn">Get in Touch</button>             
                    </div>
                </div>
            </div>
        </section>
    )
}
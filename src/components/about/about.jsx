import "./about-styles/about.css";
import "./about-styles/about-responsive.css";
import papirus from "../../images/greek/papirus.png";
import { useState } from "react";
const About = () =>{
    
    const [show, setShow] = useState(false);
    const handleShowText = () =>{
        setShow(prevState => !prevState)
    }
    return(
        <section className="about">
            <div className="container wrapper">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="about-title">О GAMEJAM</h2>
                        <p className="about-subtitle">Кликни на папирус чтобы <br/> получить больше информации</p>
                    </div>
                    <img src={papirus} className="papirus" alt="papirus" onClick={handleShowText}/>
                </div>
            </div>
            <div className="overlay" style={{ opacity: show? 1 : 0  }}>
                <div className="close-btn" onClick={handleShowText}>
                    <span className="close-btn-el"></span>
                    <span className="close-btn-el"></span>
                </div>

            </div>
        </section>
    )
}

export default About;
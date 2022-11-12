import "./about-styles/about.css";
import "./about-styles/about-responsive.css";
import papirus from "../../images/greek/papirus.png";
import Overlay from "../overlay/overlay";
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
            <Overlay handleShowText={handleShowText} show={show}></Overlay>
        </section>
    )
}

export default About;
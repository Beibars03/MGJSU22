import "./about-styles/about.css";
import "./about-styles/about-responsive.css";
import papirus from "../../images/greek/papirus.png";

const About = () =>{
    return(
        <section className="about section">
            <div className="container wrapper">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="about-title">О GAMEJAM</h2>
                        <p className="about-subtitle">Кликни на папирус чтобы <br/> получить больше информации</p>
                    </div>
                    <img src={papirus} className="papirus" alt="papirus"/>
                </div>
            </div>
        </section>
    )
}

export default About;
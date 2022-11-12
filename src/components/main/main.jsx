import "./main-styles/main.css";
import "./main-styles/main-responsive.css";
import { useSwiper } from 'swiper/react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import venus from "../../images/greek/venus1.gif";
import angel1 from "../../images/greek/angel1.png";
import angel2 from "../../images/greek/angel2.png";
import angel3 from "../../images/greek/angel3.png";

const angels = [
    {
        src: angel1,
        class: "angel",
        alt: "angel1"
    },
    {
        src: angel2,
        class: "angel",
        alt: "angel2"
    },
    {
        src: angel3,
        class: "angel",
        alt: "angel3"
    },
]
const Main = () =>{
    const swiper = useSwiper();
  
    return(
        <section className="main" id="main">
            <Container className="wrapper main-wrapper">
                <div className="main_content">
                    <p className="main_subtitle">Алматы. 7-9 Декабря</p>
                    <h1 className="main_title">GameJam <br/> 2022</h1>
                    <a href="#about" className="main_reg-btn">Регистрация</a>
                </div>
            </Container>
            <img src={venus} className="venus" alt="venus"/>
            <div className="angels">
                {angels.map((angel, index)=>
                    <img src={angel.src} className={angel.class} key={index} alt={angel.alt}/>    
                )}
            </div>
        </section>
        
    )
}
export default Main;
import "./main.css";
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
    return(
        <section className="main texture">
            <img src={venus} className="venus" alt="venus"/>
            <div>
                {angels.map((angel, index)=>
                    <img src={angel.src} className={angel.class} key={index} alt={angel.alt}/>    
                )}
            </div>
            <Container className="main-wrapper">
                <div className="main_content">
                    <p className="main_subtitle">Алматы. 7-9 Декабря</p>
                    <h1 className="main_title">GameJam <br/> 2022</h1>
                    <Link to="/" className="main_reg-btn">Регистрация</Link>
                </div>
            </Container>
            
        </section>
        
    )
}
export default Main;
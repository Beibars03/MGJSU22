import { useState } from "react";
import Overlay from "../overlay/overlay";
import "./agenda-styles/agenda.css";
import "./agenda-styles/agenda-responsive.css";
import { Container } from "react-bootstrap";
import scroll1 from "../../images/japan/scroll1.png";
import scroll2 from "../../images/japan/scroll2.png";
import scroll3 from "../../images/japan/scroll3.png";
const Agenda = () =>{

    const scrolls = [
        {
            src: scroll1,
            class: "scroll-img",
            alt: "scroll1"
        },
        {
            src: scroll2,
            class: "scroll-img",
            alt: "scroll2"
        },
        {
            src: scroll3,
            class: "scroll-img",
            alt: "scroll3"
        }
    ]
    const [show, setShow] = useState(false);
    const handleShowText = () =>{
        setShow(prevState => !prevState)
    }
    return(
        <section className="agenda page">
            <Container className="wrapper">
                <div className="agenda-content">
                    <div className="general-text">
                        <h2 className="general-title">Расписание</h2>
                        <p className="general-subtitle">Расписание GameJam 2022</p>
                    </div>
                    <div className="scrolls">
                        {scrolls.map((scroll, index)=>
                            <img src={scroll.src} className={scroll.class} alt={scroll.alt} key={index} onClick={handleShowText}/>
                        )}
                        
                    </div>
                </div>
            </Container>
            <Overlay handleShowText={handleShowText} show={show}/>
            
        </section>
    )
}
export default Agenda
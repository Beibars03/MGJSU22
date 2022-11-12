import "./about-styles/about.css";
import "./about-styles/about-responsive.css";
import { Container } from "react-bootstrap";
import papirus from "../../images/greek/papirus.png";
import Overlay from "../overlay/overlay";
import { useState } from "react";
const About = () =>{
    
    // const text = (
    //     <div className="about-info-text">
    //         <p>
    //             Mythical Game Jam от Satbayev University и сообщества the Hub - это трехдневная конкурс-выставка 
    //             от независимых разработчиков игр со всего города Алматы, посвященная созданию игр!
    //         </p>
    //         <br/>
    //         <p>
    //             Мероприятие будет проходить оффлайн,и работы принимаются только от тех, 
    //             кто участвовал на официальной площадке.
    //         </p>
    //         <br/>
    //         <p>ГеймДжем пройдет в командном режиме,так что приходи с друзьями или найди команду прямо на джеме!</p>
    //         <br/>
    //         <p>Тебя ожидают:</p>
    //         <ul className="about-info-list">
    //             <li>Помощь специалистов</li>
    //             <li>Полезные воркшопы и лекции от профессионалов</li>
    //             <li>48 часов на разработку</li>
    //             <li>6 Номинаций на победу</li>
    //             <li>Интересные знакомства</li>
    //             <li>Показ твоей игры на широкую публику</li>
    //         </ul>
    //         <br/>
    //         <p>А также, все то что сделает эти 4 дня незабываемыми! Новые друзья, поддержка сообщества, безумные идеи, 
    //         невероятный буст твоих скилов, заливка в последнюю минуту и прохождение игр от множества других разработчиков из Алматы!</p>
    //         <br/>
    //         <p>
    //             Цель нашего Гейм Джема - построить сильное сообщество игровых разработчиков в нашей стране! До скорых встреч!
    //         </p>
    //     </div>
       
    // )
       

    const [show, setShow] = useState(false);
    const handleShowText = () =>{
        setShow(prevState => !prevState)
    }

    return(
        <section className="about page">
            <Container className="wrapper">
                <div className="about-content">
                    <div className="general-text">
                        <h2 className="general-title">О GAMEJAM</h2>
                        <p className="general-subtitle">Кликни на папирус чтобы <br/> получить больше информации</p>
                    </div>
                    <img src={papirus} className="papirus" alt="papirus" onClick={handleShowText}/>
                </div>
            </Container>
            <Overlay handleShowText={handleShowText} show={show}></Overlay>
        </section>
    )
}

export default About;
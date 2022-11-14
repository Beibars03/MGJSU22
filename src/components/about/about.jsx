import React from 'react';
import "./about-styles/about.css";
import "./about-styles/about-responsive.css";
import { Container } from "react-bootstrap";
import papirus from "../../images/greek/papirus.png";
import Overlay from "../overlay/overlay";
import { useState } from "react";

const aboutTxt = [
    "Mythical Game Jam от Satbayev University и сообщества the Hub - это трехдневная конкурс-выставка от независимых разработчиков игр со всего города Алматы, посвященная созданию игр!",
    "Мероприятие будет проходить оффлайн,и работы принимаются только от тех,   кто участвовал на официальной площадке.",
    "ГеймДжем пройдет в командном режиме,так что приходи с друзьями или найди команду прямо на джеме!",
    "Цель нашего Гейм Джема - построить сильное сообщество игровых разработчиков в нашей стране! До скорых встреч!",
]

const AboutText = () =>{
    return(       
        <div className="about-info-text">
             {aboutTxt.map(txt =>
                <React.Fragment key={txt}>
                    <p>{txt}</p>
                    <br/>
                </React.Fragment>
            )}
            <h4 className="about-info-title">Тебя ожидают:</h4>
            <ul className="about-info-list">
                <li>Помощь специалистов</li>
                <li>Полезные воркшопы и лекции от профессионалов</li>
                <li>48 часов на разработку</li>
                <li>6 Номинаций на победу</li>
                <li>Интересные знакомства</li>
                <li>Показ твоей игры на широкую публику</li>
                <li>Интересные призы</li>
            </ul>
            <br/>
            <p>А также, все то что сделает эти 4 дня незабываемыми! Новые друзья, поддержка сообщества, безумные идеи, 
                невероятный буст твоих скилов, заливка в последнюю минуту и прохождение игр от множества других разработчиков из Алматы!</p>
            <br/>
           
        </div>
    )
}
const About = () =>{
    
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
                    <img src={papirus} 
                         className="papirus" 
                         style={{transform: show? `scale(${1.3})` : null}} 
                         alt="papirus" 
                         onClick={handleShowText}/>
                </div>
            </Container>
            <Overlay 
                handleShowText={handleShowText} 
                show={show}
                text={<AboutText/>}
            />
        </section>
    )
}

export default About;
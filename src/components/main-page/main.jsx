import "./main.css";
import { Container } from "react-bootstrap";
import venus from "../../images/greek/venus1.gif";
import { Link } from "react-router-dom";

const Main = () =>{
    return(
        <section className="main texture">
            <Container>
                <img src={venus} className="venus" alt="venus"/>
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
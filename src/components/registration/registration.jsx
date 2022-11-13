import "./registration-styles/registration.css";
import { Container } from "react-bootstrap";
import kempir from "../../images/turkic/kempir.gif";


const formFields = [
    {
        type: "text",
        placeholder: "название команды",
    },
    {
        type: "text",
        placeholder: "учебное заведение",
    },
    {
        type: "email",
        placeholder: "электронная почта",
    },
    {
        type: "tel",
        placeholder: "номер телефона",
    },
    {
        type: "text",
        placeholder: "капитан",
    },
    {
        type: "text",
        placeholder: "участник",
    },
    {
        type: "text",
        placeholder: "участник",
    },
    {
        type: "text",
        placeholder: "участник",
    }

]
const Registration = () =>{
    return(
        <section className="registration page">
            <Container className="wrapper">
                <div className="registration-content">
                    <div className="general-text">
                        <h2 className="general-title">Регистрация на SUMGJ22</h2>
                        <p className="general-subtitle">Регистрация команды</p>
                    </div>
                    <form method="post"  className="reg-form">
                        {formFields.map((input, index)=>
                            <input 
                                type={input.type} 
                                placeholder={input.placeholder} 
                                key={index} 
                                className="reg-control"/>
                        )}
                        <input type="submit" value="Регистрация" className="reg-btn"/>

                    </form>

                  
                </div>
            </Container>
            <img src={kempir} className="kempir gif-img" alt="kempir"/>
        </section>
    )
}
export default Registration;
import { useState } from "react";
import axios from 'axios'
import "./registration-styles/registration.css";
import { Container } from "react-bootstrap";
import kempir from "../../images/turkic/kempir.gif";


const formFields = [
    {
        name:"team",
        type: "text",
        placeholder: "название команды",
    },
    {
        name: "study",
        type: "text",
        placeholder: "учебное заведение",
    },
    {
        name: "email",
        type: "email",
        placeholder: "электронная почта",
    },
    {
        name: "tel",
        type: "tel",
        placeholder: "номер телефона",
    },
    {
        name: "captain",
        type: "text",
        placeholder: "капитан",
    },
    {
        name: "participant1",
        type: "text",
        placeholder: "участник",
    },
    {
        name: "participant2",
        type: "text",
        placeholder: "участник",
    },
    {
        name: "participant3",
        type: "text",
        placeholder: "участник",
    },
    {
        name: "participant4",
        type: "text",
        placeholder: "участник",
    }

]


const Registration = () =>{
  
    const [data, setData] = useState({})
    const handleChange = (e) =>{
       const {name, value} = e.target;
       setData({
            ...data,
            [name]: value
        })
    }
    console.log()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://sheet.best/api/sheets/310bab3f-4e01-4136-aded-2559922f0194', data)
        .then(
                document.getElementById("reg-form").reset(),
            )
    }
    return(
        <section className="registration page">
            <Container className="wrapper">
                <div className="registration-content">
                    <div className="general-text">
                        <h2 className="general-title">Регистрация на SUMGJ22</h2>
                        <p className="general-subtitle">Регистрация команды</p>
                    </div>
                    <form method="post"  className="reg-form" id="reg-form" onSubmit={handleSubmit}>
                        {formFields.map((input, index)=>
                            <input 
                                type={input.type} 
                                placeholder={input.placeholder} 
                                key={index} 
                                name={input.name}
                                className="reg-control"
                                onChange={handleChange}
                            />    
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
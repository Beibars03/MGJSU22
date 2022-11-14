import { useState } from "react";
import axios from 'axios'
import "./registration-styles/registration.css";
import { Container } from "react-bootstrap";
import kempir from "../../images/turkic/kempir.gif";


const formFields = [
    {
        name: "team",
        type: "text",
        placeholder: "название команды",
        // name: "entry.622377088",
    },
    {
        name: "study",
        type: "text",
        placeholder: "учебное заведение",
        // name: "entry.966331574",
    },
    {
        name: "email",
        type: "email",
        placeholder: "электронная почта",
        // name: "entry.1842236906",
    },
    {
        name: "tel",
        type: "tel",
        placeholder: "номер телефона",
        // name: "entry.1419582377",
    },
    {
        name: "captain",
        type: "text",
        placeholder: "капитан",
        // name: "entry.1601897725",
    },
    {
        name: "participant1",
        type: "text",
        placeholder: "участник",
        // name:"entry.1688673403",
    },
    {
       name: "participant2",
        type: "text",
        placeholder: "участник",
        // name: "entry.1712183872",
    },
    {
        name: "participant3",
        type: "text",
        placeholder: "участник",
        // name: "entry.752129752",
    },
    {
        name: "participant4",
        type: "text",
        placeholder: "участник",
        // name:"entry.1555555961",
    },
 

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
  
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://sheet.best/api/sheets/310bab3f-4e01-4136-aded-2559922f0194', data)
        .then(
                document.getElementById("reg-form").reset(),
        )
    }
    console.log(data)
    return(
        <section className="registration page">
            <Container className="wrapper">
                <div className="registration-content">
                    <div className="general-text">
                        <h2 className="general-title">Регистрация на SUMGJ22</h2>
                        <p className="general-subtitle">Регистрация команды</p>
                    </div>
                    {/* action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdxBG_we1ZXQ0yBwIs14s3CoAEgNkON1tx0ZpWmU20BjDmLkQ/formResponse?chromeless=true" */}
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
import { useState } from "react";
import axios from 'axios'
import "./registration-styles/registration.css";
import { Container } from "react-bootstrap";
import kempir from "../../images/turkic/kempir.gif";
import { GoogleFormProvider, useGoogleForm, useShortAnswerInput } from 'react-google-forms-hooks'

const formFields = [
    {
        // name: "team",
        type: "text",
        placeholder: "название команды",
        name: "entry.622377088",
    },
    {
        // name: "study",
        type: "text",
        placeholder: "учебное заведение",
        name: "entry.966331574",
    },
    {
        // name: "email",
        type: "email",
        placeholder: "электронная почта",
        name: "entry.1842236906",
    },
    {
        // name: "tel",
        type: "tel",
        placeholder: "номер телефона",
        name: "entry.1419582377",
    },
    {
        // name: "captain",
        type: "text",
        placeholder: "капитан",
        name: "entry.1601897725",
    },
    {
        // name: "participant1",
        type: "text",
        placeholder: "участник",
        name: "entry.1688673403",
    },
    {
    //    name: "participant2",
        type: "text",
        placeholder: "участник",
        name: "entry.1712183872",
    },
    {
        // name: "participant3",
        type: "text",
        placeholder: "участник",
        name: "entry.752129752",
    },
    {
        // name: "participant4",
        type: "text",
        placeholder: "участник",
        name: "entry.1555555961",
    },
 

]

// const formFields2 = [
//     {
//         type: "text",
//         placeholder: "Просто вопрос",
//         name: "entry.318924079",
        
//     },
//     {
//         type: "text",
//         placeholder: "Просто вопрос2",
//         name: "entry.69042969",
        
//     }
// ]
const Registration = () =>{
  
    // const [data, setData] = useState({})
    // const handleChange = (e) =>{
    //    const {name, value} = e.target;
    //    setData({
    //         ...data,
    //         [name]: value
    //     })
    // }
  
    
    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     axios.post('https://sheet.best/api/sheets/310bab3f-4e01-4136-aded-2559922f0194', data)
    //     .then(
    //             document.getElementById("reg-form").reset(),
    //     )
    // }
    const [formData, setFormData] = useState({
        "entry.622377088": "",
        "entry.966331574": "",
        "entry.1842236906": "",
        "entry.1419582377": "",
        "entry.1601897725": "",
        "entry.1688673403": "",
        "entry.1712183872": "",
        "entry.752129752": "",
        "entry.1555555961": "",
        
    });
    const handleInputData = (input) => (e) => {
        const { value } = e.target;
    
        setFormData((prevState) => ({
          ...prevState,
          [input]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        let url = `https://docs.google.com/forms/u/1/d/e/1FAIpQLSdxBG_we1ZXQ0yBwIs14s3CoAEgNkON1tx0ZpWmU20BjDmLkQ/formResponse?entry.622377088=${formData["entry.622377088"]}&entry.966331574=${formData["entry.966331574"]}&entry.1842236906=${formData["entry.1842236906"]}&entry.1419582377=${formData["entry.1419582377"]}&entry.1601897725=${formData["entry.1601897725"]}&entry.1688673403=${formData["entry.1688673403"]}&entry.1712183872=${formData["entry.1712183872"]}&entry.752129752=${formData["entry.752129752"]}&entry.1555555961=${formData["entry.1555555961"]}`;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
       
    }
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
                                value={formData[input.name]}
                                className="reg-control"
                                onChange={handleInputData(input.name)}
                                required
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
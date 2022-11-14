import "./registration-styles/registration.css";
import { Container } from "react-bootstrap";
import kempir from "../../images/turkic/kempir.gif";


const formFields = [
    {
        type: "text",
        placeholder: "название команды",
        name: "entry.622377088",
    },
    {
        type: "text",
        placeholder: "учебное заведение",
        name: "entry.966331574",
    },
    {
        type: "email",
        placeholder: "электронная почта",
        name: "entry.1842236906",
    },
    {
        type: "number",
        placeholder: "номер телефона",
        name: "entry.1419582377",
    },
    {
        type: "text",
        placeholder: "капитан",
        name: "entry.1601897725",
    },
    {
        type: "text",
        placeholder: "участник",
        name:"entry.1688673403",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.1712183872",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.752129752",
    },
    {    
        type: "text",
        placeholder: "участник",
        name:"entry.1555555961",
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
{/*                     
                    <script type="text/javascript">var submitted=false;</script> */}
					<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location='thanks.html';}"></iframe>
					{/* <form 
						method="POST" 
						action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdxBG_we1ZXQ0yBwIs14s3CoAEgNkON1tx0ZpWmU20BjDmLkQ/formResponse?chromeless=true"
						className="reg-form"
						target="hidden_iframe" onsubmit="submitted=true;">
						<input name="entry.622377088" type="text" className="reg-control" placeholder="название команды" required style=""/>
						<input name="entry.1842236906" type="email" className="reg-control" aria-describedby="emailHelp" placeholder="электронная почта" required/>
						<input name="entry.1419582377" type="number" className="reg-control" placeholder="номер телефона" required/>
						<input name="entry.1601897725" type="text" className="reg-control" placeholder="капитан" required/>
						<input name="entry.1688673403" type="text" className="reg-control" placeholder="участник" required/>
						<input name="entry.1712183872" type="text" className="reg-control" placeholder="участник"/>
					
						<input name="entry.752129752" type="text" className="reg-control" placeholder="участник"/>
						<input name="entry.1555555961" type="text" className="reg-control" placeholder="участник"/>
						<input name="entry.966331574" type="text" className="reg-control" placeholder="учебное заведение" required/>
                        <input type="submit" value="Регистрация" className="reg-btn"/>

					<button type="submit" class="btn btn-outline-light button-submit">Регистрация</button>
					</form> */}


                    <form method="post"  className="reg-form" action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdxBG_we1ZXQ0yBwIs14s3CoAEgNkON1tx0ZpWmU20BjDmLkQ/formResponse?chromeless=true">
                        {formFields.map((input, index)=>
                            <input 
                                type={input.type} 
                                placeholder={input.placeholder} 
                                key={index} 
                                name={input.name}
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
import "./loader.css";
import { Container } from "react-bootstrap"
import cloud from "../../images/clouds/cloud.webp"

const clouds = [
    {
        src: cloud,
        class: "loader-cloud",
        alt: "cloud1"
    },
    {
        src: cloud,
        class: "loader-cloud",
        alt: "cloud2"
    },
    {
        src: cloud,
        class: "loader-cloud",
        alt: "cloud3"
    },

]
const Loader = () =>{
    return(
        <section className="loader">
            <Container>
                
                <div className="clouds">
                    {clouds.map((image, index)=>
                            <img src={image.src} className={image.class} alt={image.alt} key={index} />
                        )}
                </div>
          
            </Container>
                

            </section>
        
    )
}
export default Loader
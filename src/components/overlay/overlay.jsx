import "./overlay.css";

const Overlay = ({handleShowText, show, text}) =>{
    return(
        <div className="overlay" style={{ display: show? "block" : "none"  }}>
            <div className="close-btn" onClick={handleShowText}>
                <span className="close-btn-el"></span>
                <span className="close-btn-el"></span>
            </div>
            <div className="overlay-content">
                {text}
                
            </div>

    </div>
    )
}
export default Overlay
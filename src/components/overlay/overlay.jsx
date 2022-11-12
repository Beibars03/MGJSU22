import "./overlay.css";

const Overlay = ({handleShowText, show}) =>{
    return(
        <div className="overlay" style={{ opacity: show? 1 : 0  }}>
        <div className="close-btn" onClick={handleShowText}>
            <span className="close-btn-el"></span>
            <span className="close-btn-el"></span>
        </div>

    </div>
    )
}
export default Overlay
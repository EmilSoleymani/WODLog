import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faTwitch, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className="footer-container">
        <div className="icons-container">
            <FontAwesomeIcon icon={faTwitter} className="footer-icon"/>
            <FontAwesomeIcon icon={faInstagram} className="footer-icon"/>
            <FontAwesomeIcon icon={faTwitch} className="footer-icon"/>
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
            <FontAwesomeIcon icon={faYoutube} className="footer-icon"/>
        </div>
    </div>
  )
}

export default Footer
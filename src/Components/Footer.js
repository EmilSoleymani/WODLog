import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faTwitch, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="inquiries-container">
            <h3 className="inquiries-title">Inquiries</h3>
            <label className="inquiries-emil">Emil Soleymani ♦ 647-922-5184 ♦ soleymae@mcmaster.ca</label>
            <br></br>
            <label className="inquiries-sam">Samarth Mehta ♦ 647-389-8974 ♦ mehtas30@mcmaster.ca</label>
            <p className="footer-copyright">Copyright 2022 <FontAwesomeIcon icon={faCopyright}/> Emil Soleymani and Samarth Mehta. All Rights Reserved.</p>
        </div>
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faTwitch, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import contributorsData from '../Data/contributors.json'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="inquiries-container">
            <h3 className="inquiries-title">Inquiries</h3>
            
            {
              contributorsData.map((contributor, index) => {
                return(
                <div key={`contributor${index}`}>
                  <label>{contributor.name} ♦ {contributor.phone} ♦ {contributor.email}</label>
                  <br></br>
                </div>
                )
              })
            }
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
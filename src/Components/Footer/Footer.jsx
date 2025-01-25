import './Footer.css'
import Brand from "../Brand/Brand"
import { InstagramLogo, YoutubeLogo, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
    return(
        <footer>
            <div className="footer-content container">
                <Brand/>
                <div className="social-media">
                    <InstagramLogo size={32} />
                    <YoutubeLogo size={32} />
                    <LinkedinLogo size={32} />
                </div>

            </div>
        </footer>
    )
}


export default Footer
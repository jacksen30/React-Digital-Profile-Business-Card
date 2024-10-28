import facebookIcon from '../assets/icons/facebook.png';
import githubIcon from '../assets/icons/github.png';
import instagramIcon from '../assets/icons/instagram.png';
import linkedinIcon from '../assets/icons/linkedin.png';

function Footer() {
    return (
        <footer className="footer">
            <a href="" alt="github logo"><img className="social-icon" src={githubIcon} /></a>
            <a href="" alt="LinkedIn logo"><img className="social-icon" src={linkedinIcon} /></a>
            <a href="" alt="Instagram logo"><img className="social-icon" src={instagramIcon} /></a>
            <a href="" alt="Facebook logo"><img className="social-icon" src={facebookIcon} /></a>
        </footer>
    )
}

export default Footer;
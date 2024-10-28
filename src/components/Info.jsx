import headshot from "../assets/images/headshot.png"
import linkedinInfo from "../assets/icons/linkedinInfo.png"
import email from "../assets/icons/mail.png"

function Info() {
    return (
        <div className="info-section">
            <img className="hero-img" src={headshot} alt="Jacksen Nillson professional headshot" />
            <h1>Jacksen Nillson</h1>
            <h2>Frontend Developer</h2>
            <a href="devbyjacksen.com">devbyjacksen.com</a>
            <div className="info-btns-wrapper">
                <a className="info-btn info-btn--email"><img src={email} alt=""/>Email</a>
                <a className="info-btn info-btn--linkedin"><img src={linkedinInfo} alt=""/>LinkedIn</a>
            </div>
        </div>
    )
}

export default Info;
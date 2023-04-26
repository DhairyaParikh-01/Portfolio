import './index.scss'
import {React, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHackerrank, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar  = () =>{
    const [showNav, setShowNav] = useState(false);

    return(
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="Logo" />
                <img src={LogoSubtitle} className="sub-logo" alt="slobdan" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon >
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" ></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" ></FontAwesomeIcon>
                </NavLink>
                <FontAwesomeIcon icon={faClose} color="#ffd700" size="3x" className="close-icon" onClick={() => setShowNav(false)} />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dhairya-parikh-95b25b241/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/DhairyaParikh-01">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/dhairyaparikh101">
                        <FontAwesomeIcon icon={faHackerrank} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dhairya1616/">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                icon={faBars}
                color="#ffd700"
                size="3x"
                onClick={()=> setShowNav(true)} 
                className="hamburger-icon"
            />
        </div>
    )
} 

export default Sidebar
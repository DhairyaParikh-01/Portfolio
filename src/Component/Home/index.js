import LogoTitle from "../../assets/images/logo-s.png"
import {Link} from "react-router-dom"
import { useState ,useEffect } from "react"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
import Loader from "react-loaders"
// import Logo from "../Logo"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'a','i','r','y','a',' ','p','a','r','i','k','h']
    const jobArray = ['s','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={letterClass}>i,</span>
                <br />  
                <span className={letterClass}>I</span>
                <span className={letterClass}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={28} />
                </h1>
                <h2>MERN stack Developer | web developer | CSE student</h2>
                <Link to="contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export  default Home
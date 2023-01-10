import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGitAlt, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500);
    }, [])
    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['A','b','o','u','t',' ','m','e']}
                        idx = {15}
                    />
                </h1>
                <p>I am a coding enthusiast with strong knowledge of Data Structures and Algorithms, Skilled in Java, C++, Python and javascript.Also having extensive knowledge about core CS subjects like, DBMS, OS, OOPS, Networking and Network Security.</p>
                <p>I am seeking an opportunity to implement my programming and development skills in a practical application which will give me exposure to the actual design and execution processes of industry. I would love to associate with such an organization where I can utilize my skills and gain further experience while enhancing the company’s productivity and reputation.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cube-spinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs} color="#339933" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faDatabase} color="#4DB33D" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4328" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
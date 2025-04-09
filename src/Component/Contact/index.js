import Loader from 'react-loaders'
import './index.scss'
import { useState, useEffect, useRef } from "react"
import emailjs from '@emailjs/browser'
import AnimatedLetters from "../AnimatedLetters"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        // Sending an email using Email.js library.
        emailjs.sendForm('service_uad5zd1', 'template_1948dcz', form.current, '27BVlxl4X53mlqKJs')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message successfully sent!')
                window.location.reload(false)
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send the message, please try again')
            });
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I am interested in Full time opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Dhairya Parikh,
                    <br />
                    India,
                    <br />
                    Vadodara, Gujarat. 390019 <br />
                    <br />
                    <span>dhairyaparikh1002@gmail.com</span>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
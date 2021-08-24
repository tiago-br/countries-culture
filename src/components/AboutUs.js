import { Component } from "react";

import Navbar from "./Navbar";
import gif1 from '../img/tenor.gif'
import gitLogo from '../img/GitHub-Logo.png'

import './AboutUs.css';


class AboutUs extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div className="about-us-page">
                    <section>
                        <h1>About Project</h1>
                        <div className="about-project-container">
                            <div>
                                <p className="about-project-p"> This is a simples project with some information about countries around the world.The main idea was work with many different APIs together using React.In this website we worked with 4 APIs:
                                </p>
                                <ul>
                                    <li>
                                        <a href="https://restcountries.eu/">restcountries.eu</a>
                                    </li>
                                    <li>
                                        <a href="https://www.themealdb.com/api.php">themealdb.com</a>
                                    </li>
                                    <li>
                                        <a href="https://developers.themoviedb.org/3/getting-started/introduction">developers.themoviedb.org</a>
                                    </li>
                                    <li>
                                        <a href="https://developer.spotify.com/documentation/web-api/">developer.spotify.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src={gif1} alt="gif"/>
                            </div>
                        </div>
                    </section>
                    <section className='creators-container'>
                        <h1>About Us</h1>
                        <div className="contact-creators">
                            <div className="contact-creators-box">
                                <img className="img-github" src="https://avatars.githubusercontent.com/u/82835538?v=4" alt="Ana Carolina Lima"/>
                                <div>
                                    <h3>Ana Carolina Raphael de Lima</h3>
                                    <div className="contact-creators-links">
                                    <a className='link' href="https://github.com/AnaCRDEL"><img className="git-logo-img" src={gitLogo} alt="Github"/>GitHub</a>
                                    <a className='link' href="https://www.linkedin.com/in/anacarolinardel/"><img className="linkedin-logo-img" src='https://image.flaticon.com/icons/png/512/174/174857.png' alt="Linkedin"/>Linkedin</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-creators-box">
                                <img className="img-github" src="https://avatars.githubusercontent.com/u/82057413?v=4" alt="Ana Carolina Lima"/>
                                <div>
                                    <h3>Tiago de Biagi Rebelato</h3>
                                    <div className="contact-creators-links">
                                    <a className='link' href="https://github.com/tiago-br"><img className="git-logo-img" src={gitLogo} alt="Github"/>GitHub</a>
                                    <a className='link' href="https://www.linkedin.com/in/tiago-rebelato-076808209/"><img className="linkedin-logo-img" src='https://image.flaticon.com/icons/png/512/174/174857.png' alt="Linkedin"/>Linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                </div>
                
            </div>
        )
    }
}

export default AboutUs
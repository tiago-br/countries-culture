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
                    <section>
                        <h1>About Us</h1>
                        <div className="contact-creators">
                            <div className="contact-creators-box">
                                <a href="https://github.com/AnaCRDEL"><div ><img className="img-github" src="https://avatars.githubusercontent.com/u/82835538?v=4" alt="Ana Carolina Lima"/></div><div className="git-logo-img-contaie"><img className="git-logo-img"src={gitLogo} alt="Github"/><h3>Ana Carolina Lima</h3></div></a>
                            </div>
                            <div className="contact-creators-box">
                                <a href="https://github.com/tiago-br"><div ><img className="img-github" src="https://avatars.githubusercontent.com/u/82057413?v=4" alt="Tiago Rebelato"/></div><div className="git-logo-img-contaie"><img className="git-logo-img"src={gitLogo} alt="Github"/><h3>Tiago de Biagi Rebelato</h3></div></a>
                            </div>
                        </div>
                        
                    </section>
                </div>
                
            </div>
        )
    }
}

export default AboutUs
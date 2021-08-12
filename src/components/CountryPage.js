import axios from "axios";
import { Component } from "react";
import Navbar from "./Navbar";





class CountryPage extends Component {

    state={
        country:{},
        allArtists:[],
        imgArtist:""
    }

    componentDidMount(){

        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params.countryName}`).then(result=>{
            this.setState({
                country:result.data[0]
            })
                
            
        }).then(()=>
            axios.get(`https://musicbrainz.org/ws/2/artist?query=area:${this.state.country.name}&limit=20&fmt=json`)).then(result=>{             
                this.setState({
                    allArtists:result.data.artists
                })
            })
            // puxando nome do artista na API musicBrainz
            // .then(()=>{
            //     this.setState({
            //         rndartist:this.state.allArtists[Math.floor(Math.random()*this.state.allArtists.length)]
            //     })
            // })
    }
        
           

    render(){
        console.log(this.state.allArtists)
        return (
            
            <div>
                <Navbar/>
                <div className="country-page-container">
                    <section className="country-details">
                        <div><img className ="countrypage-img-country"src={this.state.country.flag} alt={`img-${this.state.country.name}`}/></div>
                        <article className="article-country">
                        <h2 id="country-page-name">{this.state.country.name}</h2>
                        <h3 className="country-page-capital">Capital: {this.state.country.capital}</h3>
                        <h3 className="country-page-capital">Region: {this.state.country.region}</h3>
                        <h3 className="country-page-capital">Area: {this.state.country.area} km<sup>2</sup></h3>
                        <div className="country-page-list-languages">Language(s): <ul>{this.state.country.languages?this.state.country.languages.map(language=><li>{language.name} </li>):<li>language</li>}</ul></div>
                        </article>
                    </section>
                    <section>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>
                            <div>
                                
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        )
    }
}

export default CountryPage
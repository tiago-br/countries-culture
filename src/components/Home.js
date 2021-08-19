import React, {Component} from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import CardCountry from './CardCountry';
import "./Home.css"


class Home extends Component {
    state = {
        countries:[],
        searchCountries:[],
    }

    componentDidMount() {
        axios.get("https://restcountries.eu/rest/v2/all").then((result) => {
            this.setState({
                countries: result.data,
                searchCountries:result.data
            })
        })
    }
    handleSearchFilter(event){
        const copyArr = [...this.state.countries]
        let filteredCountries = copyArr.filter(element=>{
            let nameLow = element.name.toLowerCase()
            let eventLow = event.target.value.toLowerCase()
            return nameLow.includes(eventLow)
        }
        )

        this.setState({
            searchCountries:filteredCountries
        }) 
    }

    getRandomCountryName(){
        if (this.state.countries.length === 0) return
        const randomCountry = this.state.countries[Math.floor(Math.random()*this.state.countries.length)];
        return randomCountry.name
    }

    render() {

        
        return (
        <div>
            <Navbar/>
            <div className="home-container">
            {/* no home-container esta o background color verde */}
            <section className="homepage-about"><h1 id="name-page">Countries & Culture</h1><p>
                This is a simple page with some cultural information about countries over the world.
                <br/> Please click in some flag to know more about cuisine, movies and musics from that country.
            </p></section>
            <div className="div-link-container">
                <NavLink className="link-navbar random-link" to={`/country${this.getRandomCountryName()}`}>Random Country</NavLink>
            </div>
            <input className="search-filter-country" type="text" placeholder="Search Country" name="filterCountries" onChange={(e)=>{
                this.handleSearchFilter(e)
            }}/>
                <div className="home-container-cards">
                    {this.state.searchCountries.map(country => country.demonym ? <CardCountry flag={country.flag} key={country.alpha3Code} alpha3Code={country.alpha3Code} name={country.name}/> : null ) }             
            </div>
            </div>
        </div>
        )
    }
}

export default Home;
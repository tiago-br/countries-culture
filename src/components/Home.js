import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import CardCountry from './CardCountry';
import "./Home.css"


class Home extends Component {
    state = {
        countries:[],
        searchCountries:[],
        countriesByContinent: [],
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

    handleCheckedContinent = (event) => {
        let selectedCountries = []
        let countriesByContinent = []
        if (event.target.checked) {
            selectedCountries = this.state.countries.filter((country) => {
                return country.region.toLowerCase() === event.target.name
            })
            countriesByContinent = [...this.state.countriesByContinent, ...selectedCountries]
        } else {
            selectedCountries = this.state.countriesByContinent.filter((country) => {
                return country.region.toLowerCase() !== event.target.name
            })
            countriesByContinent = selectedCountries
        }
        countriesByContinent.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        this.setState({
            countriesByContinent
        })
    }

    render() {
        return (
        <div>
            <Navbar/>
            <div className="home-container">
            <section className="homepage-about">
                <h1 id="name-page">Countries & Culture</h1>
                <p>
                    This is a simple page with some cultural information about countries over the world.
                    <br/> Please click in some flag to know more about cuisine, movies and musics from that country.
                </p>
            </section>
            <div className="div-random-button">
                <NavLink className="random-button" to={`/country${this.getRandomCountryName()}`}>Random Country</NavLink>
            </div>
            <input className="search-filter-country" type="text" placeholder="Search Country" name="filterCountries" onChange={(e)=>{
                this.handleSearchFilter(e)
            }}/>
            <div className='continentSelection'>
                <p>See only countries from:</p>
                <input type="checkbox" id="africa" name="africa" onChange={this.handleCheckedContinent}/>
                <label for="africa">Africa</label>
                <input type="checkbox" id="americas" name="americas" onChange={this.handleCheckedContinent}/>
                <label for="americas">Americas</label>
                <input type="checkbox" id="asia" name="asia" onChange={this.handleCheckedContinent}/>
                <label for="asia">Asia</label>
                <input type="checkbox" id="europe" name="europe" onChange={this.handleCheckedContinent}/>
                <label for="europe">Europe</label>
                <input type="checkbox" id="oceania" name="oceania" onChange={this.handleCheckedContinent}/>
                <label for="oceania">Oceania</label>
            </div>
                <div className="home-container-cards">
                    {this.state.countriesByContinent.length > 0 
                        ?
                        this.state.countriesByContinent.map(country => country.demonym 
                            ?
                            <CardCountry flag={country.flag} key={country.alpha3Code} alpha3Code={country.alpha3Code} name={country.name}/> 
                            : 
                            null )
                        :
                        this.state.searchCountries.map(country => country.demonym 
                            ? <CardCountry flag={country.flag} key={country.alpha3Code} alpha3Code={country.alpha3Code} name={country.name}/> 
                            : 
                            null )
                        }
            </div>
            </div>
        </div>
        )
    }
}

export default Home;
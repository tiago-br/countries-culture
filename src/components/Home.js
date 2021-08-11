import React, {Component} from 'react';
import axios from 'axios';

import Navbar from './Navbar';
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
        console.log(this.state.searchCountries)
        
      
    }

    render() {

        
        return (
        <div>
            <Navbar/>
            <div className="home-container">
            {/* no home-container esta o background color verde */}
            <section>ABOUT</section>
            <input className="search-filter-country" type="text" placeholder="Search Country" name="filterCountries" onChange={(e)=>{
                this.handleSearchFilter(e)
            }}/>
                <div className="home-container-cards">
                    {this.state.searchCountries.map(country => <CardCountry flag={country.flag} key={country.alpha3Code} alpha3Code={country.alpha3Code} name={country.name} />) }             
            </div>
            </div>
        </div>
        )
    }
}

export default Home;
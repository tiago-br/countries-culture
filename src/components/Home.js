import React, {Component} from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import CardCountry from './CardCountry';


class Home extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get("https://restcountries.eu/rest/v2/all").then((result) => {
            this.setState({
                countries: result.data
            })
        })
    }

    render() {
        return (<>
            <Navbar/>
            <div>ABOUT</div>
            <div>
                {this.state.countries.map(country => <CardCountry flag={country.flag} key={country.alpha3Code} alpha3Code={country.alpha3Code} name={country.name} />)}                
            </div>
            </>
        )
    }
}

export default Home;
import { Component } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import MoviesListCard from "./MoviesListCard";

import './MoviesList.css';

class MoviesList extends Component {
    state={
        flag: '',
        movies: [],
        hasLoaded: false,
    }
    componentDidMount = async () => {
        const demonym = this.props.match.params.demonym
        const country = this.props.match.params.countryName 
        let moviesByName = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8f05aeed2f8c839cd62679c6069ef53d&query=${country}&include_adult=false`)
        let moviesByDemonym = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8f05aeed2f8c839cd62679c6069ef53d&query=${demonym}&include_adult=false`)
        let movies = [...moviesByName.data.results, ...moviesByDemonym.data.results];
        let flag = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
        flag = flag.data[0].flag
        this.setState({
            flag,
            movies,
            hasLoaded: true
        })
    }

    render(){
        console.log(this.state.movies)
        return(
            <>
            <Navbar/>
            {this.state.hasLoaded ?
            <div className='movies-page'>    
                <div className='country-flag'>
                    <h1><img src={this.state.flag} alt={`${this.props.match.params.countryName}-flag`}/><span>Movies</span></h1>
                </div>
                <div className='movies-list'>
                    {this.state.movies.map((movie) => (
                        <MoviesListCard className='movie-card' key={movie.id} movie={movie} demonym={this.props.match.params.demonym} countryName={this.props.match.params.countryName}/>
                    ))}
                </div>
            </div>
            :
            <div >
                <div className="img-loading-container"><img className="img-loading"src="https://i.pinimg.com/originals/aa/55/60/aa55602cfbce86ac0defd85c9e2672a0.png"alt="Loading"/><h1>Loading...</h1></div>
            </div>
            }
            </>
        )
    }
}
export default MoviesList
import { Component } from "react";
import axios from "axios";

import Navbar from "./Navbar";

import './MovieDetalis.css';

class MovieDetails extends Component{
    state = {
        hasLoaded: false,
        country: '',
        flag: '',
        movie: {},  
    }

    componentDidMount = async () => {
        const country = this.props.match.params.countryName;
        const id = this.props.match.params.id;
        const getMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8f05aeed2f8c839cd62679c6069ef53d`);
        const movie = getMovie.data;
        const getCountry = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
        const countryFlag = getCountry.data[0].flag;
        
        this.setState ({
            hasLoaded: true,
            country,
            flag: countryFlag,
            movie,
        })
    }

    render(){
        console.log(this.state.movie)
        return(
            <>
            <Navbar/>
            {this.state.hasLoaded ?
            <div className='movie-page'>
                <div className="title-movie">
                    <h1><img src={this.state.flag} alt={`${this.state.country}-flag`}/><span>{this.state.movie.title}</span></h1>
                </div>
                <div className='movie-container'>
                    <div className='movie-details'>
                        {this.state.movie.tagline === '' ? <></>
                        :
                        <h2>"{this.state.movie.tagline}"</h2>}
                        <h3>Original title:</h3>
                        <p>{this.state.movie.original_title}</p>
                        <h3>Release date:</h3>
                        <p>{this.state.movie.release_date}</p>
                        {(this.state.movie.genres).length === 0 ? <></> 
                        : 
                        <>
                        <h3>Genres:</h3>
                        {(this.state.movie.genres).length > 1 ? 
                        <p>{this.state.movie.genres[0].name}, {this.state.movie.genres[1].name}</p> 
                        : <p>{this.state.movie.genres[0].name}</p>}
                        </>}
                        <h3>Original language:</h3>
                        <p>{(this.state.movie.original_language).toUpperCase()}</p>
                        <h3>Sinopse:</h3>
                        <p>{this.state.movie.overview}</p>
                    </div>
                    <div className='movie-poster'>
                        <img className='movie-page-img' src={this.state.movie.poster_path === null ? 'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=6&m=911590226&s=612x612&w=0&h=u6vP2FnJG8Ib3O1xofOUeJ5NtHWrWdRnV-OSL8arBnk=' 
                        : `http://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} alt="movie-img"/>
                    </div>
                </div>
            </div>
            :
            <div >
                <div className="img-loading-container"><img className="img-loading" src="https://i.pinimg.com/originals/aa/55/60/aa55602cfbce86ac0defd85c9e2672a0.png" alt="Loading"/><h1>Loading...</h1></div>
            </div>
            }
            </>
        )
    }
}
export default MovieDetails
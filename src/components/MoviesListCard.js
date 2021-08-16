import React from 'react'
import { NavLink } from 'react-router-dom'

const MoviesListCard = (props) =>{
    return(
        <>
        <div className='movie-card'>
            <NavLink  
            className='movie-card-link'to={`/country${props.countryName}/movies/${props.movie.original_title}`}><img className='movie-img' src={props.movie.poster_path === null ? 'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=6&m=911590226&s=612x612&w=0&h=u6vP2FnJG8Ib3O1xofOUeJ5NtHWrWdRnV-OSL8arBnk=' : `http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} alt="movie-img"/><br/></NavLink>
            <p>{props.movie.original_title}</p>
        </div>
        </>
    )
}
export default MoviesListCard;
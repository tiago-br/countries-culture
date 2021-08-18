import React from 'react'
import { NavLink } from 'react-router-dom'

const RandomMovieCard = (props) =>{
    return(
        <>
        {props.movie === undefined || props.movie === null ? 
            <div className='card-img-rnd'>
                <NavLink to='/'> <img className='random-card-img' src='https://img.freepik.com/fotos-gratis/pipoca-caindo-de-um-copo-de-papel-listrado-de-vermelho-e-branco_218289-1113.jpg?size=626&ext=jpg' alt='not-found-img'/></NavLink>
                <h3 className='rnd-card-text-link'>Movies not found</h3>
            </div>
        :
        <>
        <div className='card-img-rnd'>
            <NavLink  className='random-movie' to={`/country${props.countryName}/movies${props.demonym}/${props.movie.id}`}><img className='' src={props.movie.poster_path === null ? 'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=6&m=911590226&s=612x612&w=0&h=u6vP2FnJG8Ib3O1xofOUeJ5NtHWrWdRnV-OSL8arBnk=' : `http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} alt="movie"/><br/></NavLink>
            <p>{props.movie.original_title}</p>
        </div>            
        <div className="rnd-card-text-link">
            <NavLink className="card-link" to={`/country${props.countryName}/movies${props.demonym}`}>See more movies</NavLink>
        </div>
        </>
        }
        </>
    )
}
export default RandomMovieCard
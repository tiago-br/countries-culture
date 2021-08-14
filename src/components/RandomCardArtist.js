import React from 'react'
import { NavLink } from 'react-router-dom'

const RandomCardArtist = (props) =>{

    return(
        <div class="rnd-card-container">
            <div className="card-img-rnd">
                <img className="random-card-img" src={props.artistImg} alt="artist"/><br/>
                <p>{props.artistName}</p>
            </div>
            <div className="rnd-card-text-link">
                <NavLink className="card-link"to="#">Look more artists</NavLink>
            </div>
        </div>
    )
}

export default RandomCardArtist
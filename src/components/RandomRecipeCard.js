import React from 'react'
import { NavLink } from 'react-router-dom'

const RandomRecipeCard = (props) =>{

    return(
        <>
        <div>
            <img className="random-card-img"src={props.image} alt="food"/>
        </div>
        <div>
            <NavLink to={``}></NavLink>
        </div>
        </>
    )
}

export default RandomRecipeCard
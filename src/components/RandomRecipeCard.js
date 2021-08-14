import React from 'react'
import { NavLink } from 'react-router-dom'

const RandomRecipeCard = (props) =>{

    return(
        <>
        <div className="card-img-rnd">

            <NavLink  className="img-link-card"to={props.meal?`/country${props.countryName}/recipes${props.demonym}/${props.meal}`:"/"}><img className="random-card-img"src={props.image} alt="food"/><br/></NavLink>
            <p>{props.meal}</p>
        </div>
        {props.image==="https://st.depositphotos.com/1007298/1493/i/950/depositphotos_14931205-stock-photo-open-old-recipe-book.jpg"?
            <h3 className="rnd-card-text-link">no recipe was found</h3>
            :
            <div className="rnd-card-text-link">
                
                <NavLink className="card-link" to={`/country${props.countryName}/recipes${props.demonym}`}>Look more recipes</NavLink>
            </div>
        }
        
        </>
    )
}

export default RandomRecipeCard
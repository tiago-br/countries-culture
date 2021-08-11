import React from "react";
import { NavLink } from "react-router-dom";

const CardCountry = (props) => {
    return(
        <div>
            <NavLink to={`/country${props.alpha3Code}`}>
                <div>
                    <img src={props.flag} alt={`flag-country${props.alpha3Code}`} className='card-flag' />
                </div>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default CardCountry;
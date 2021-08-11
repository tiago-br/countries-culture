import React from "react";
import { NavLink } from "react-router-dom";

const CardCountry = (props) => {
    return(
        <div className="card-country-flag">
            <NavLink to={`/country${props.alpha3Code}`}>
            <div className="nav-link-card-flag">
                <div>
                    <img src={props.flag} alt={`flag-country${props.alpha3Code}`} className='card-flag' />
                </div>
                <p>{props.name}</p>
            </div>
            </NavLink>
        </div>
    )
}

export default CardCountry;
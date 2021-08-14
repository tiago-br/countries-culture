import { NavLink } from "react-router-dom"

const RecipesListCard = (props) =>{
    return(
        <div className="recipe-list-card-container">
            <div><NavLink to={`/country${props.countryName}/recipes${props.demonym}/${props.meal}`}><img className="img-recipe-list-card"src={props.image} alt="meal"/></NavLink></div>
            <p>{props.meal}</p>
        </div>
    )
}
export default RecipesListCard
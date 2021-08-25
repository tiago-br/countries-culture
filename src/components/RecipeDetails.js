import { Component } from "react";
import Navbar from "./Navbar";
import axios from 'axios';
import './RecipeDetails.css'

class RecipeDetails extends Component{
    state={
        curRecipe:{},
        load:false
    }
    componentDidMount=async()=>{
        let {demonym,countryName,recipe} = this.props.match.params
        const curRecipe = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
        const country = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)

        const arrRecipe = Object.entries(curRecipe.data.meals[0])
        const ingredients = arrRecipe.filter(element=>{return element[0].includes("Ingredient") && element[1]})
        const measure = arrRecipe.filter(element=>element[0].includes("Measure")&& element[1]) 
        
        this.setState({
            curRecipe:curRecipe.data.meals[0],
            load:true,
            imgFlag:country.data[0].flag,
            ingredients,
            measure
        })
    }
    render(){
        
        return(
            <div>
            <Navbar className="nav-bar-recipe-details"/>
            {this.state.load ?
                <div className="recipe-details-page">
                    <div className="container-title-recipe">
                        <h1><img src={this.state.imgFlag} alt={`${this.props.match.params.countryName}-flag`}/><span>{this.props.match.params.recipe}</span></h1>
                    </div>
                    <section className="container-recipe-details">
                        <div className="ingredients-container">
                            <div className="constainer-list-ingredients"><h2>Ingredients</h2><ul>{this.state.ingredients.map(e=><li key={e[0]}>{e[1]}</li>)}</ul></div>
                            
                            <div className="constainer-list-measure"><h2>Measure</h2><ul>{this.state.measure.map(e=><li key={e[0]}>{e[1]}</li>)}</ul></div>
                        </div>
                        <div className="img-container">
                            <div><img src={this.state.curRecipe.strMealThumb} alt={this.state.curRecipe.strMeal}/></div>
                        </div>
                    </section>
                    <section>
                        <div className="instructions-container">
                            <h2>Instructions</h2>
                            <p>
                                {this.state.curRecipe.strInstructions}
                            </p>
                        </div>

                    </section>
                </div>
                    :
                    <div >
                        <div className="img-loading-container"><img className="img-loading"src="https://i.pinimg.com/originals/aa/55/60/aa55602cfbce86ac0defd85c9e2672a0.png"alt="Loading"/><h1>Loading...</h1></div>
                    </div>
            }
            </div>
        )
    }
}
export default RecipeDetails
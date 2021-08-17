import { Component } from "react";
import axios from 'axios'
import Navbar from "./Navbar";
import './RecipesList.css'
import RecipesListCard from "./RecipeListCard";

class RecipesList extends Component {
    state={
        flag:"",
        recipes:[],
        hasLoaded:'',
        randomPlaylist:'',
        load:false

    }
    componentDidMount=async()=>{
        const demonym = this.props.match.params.demonym
        const country = this.props.match.params.countryName
        
        let recipes = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${demonym}`)
        let flag = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`)

        flag= flag.data[0].flag
        
        this.setState({
            flag,
            recipes:recipes.data.meals,
            load:true
        })
    }
   
    ;
    render(){
        console.log(this.state.country)
        return(
            <>
            <Navbar/>
            {this.state.load?<div className="more-recipes-page">
                <div className="flag-recipes">
                    <h1><img src={this.state.flag} alt={`${this.props.match.params.countryName}-flag`}/><span>Recipes</span></h1>
        
                </div>
                <section className="recipes-section">
                    <div className="recipes-container">
                        {this.state.recipes.map(recipe=><RecipesListCard key={recipe.idMeal} meal={recipe.strMeal} image={recipe.strMealThumb} demonym={this.props.match.params.demonym} countryName={this.props.match.params.countryName}/>)}
                    </div>

                </section>
            </div>:
            <div >
                <div className="img-loading-container"><img className="img-loading"src="https://i.pinimg.com/originals/aa/55/60/aa55602cfbce86ac0defd85c9e2672a0.png"alt="Loading"/><h1>Loading...</h1></div>
            </div>
            }
            </>
        )
    }
}


export default RecipesList
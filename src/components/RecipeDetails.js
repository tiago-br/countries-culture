import { Component } from "react";
import Navbar from "./Navbar";
import axios from 'axios';

class RecipeDetails extends Component{
    state={
        curRecipe:{},
        load:false
    }
    componentDidMount=async()=>{
        let {demonym,countryName,recipe} = this.props.match.params
        const curRecipe = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
        const country = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
        this.setState({
            curRecipe:curRecipe.data.meals[0],
            load:true,
            imgFlag:country.data[0].flag
        })
    }
    render(){
        console.log(this.state.imgFlag)
        return(
            <div>
            <Navbar/>
            {this.state.load ?
                <div>
                    <div>
                        <h1><img src={this.state.imgFlag} alt={`${this.props.match.params.countryName}-flag`}/>{this.props.match.params.recipe}</h1>
                    </div>
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
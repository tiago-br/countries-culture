import axios from "axios";
import { Component } from "react";
import Navbar from "./Navbar";
import RandomRecipeCard from "./RandomRecipeCard";





class CountryPage extends Component {

    state={
        country:{},
        //allArtists:[],
        //imgArtist:"",
        recipes:{}
    }

    componentDidMount=async()=>{

       const result = await axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params.countryName}`)
       const country = result.data[0]
       let recipes = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.demonym}`)
       
        
       if(recipes.data.meals===null){
            recipes ={
                strMealThumb:"https://st.depositphotos.com/1007298/1493/i/950/depositphotos_14931205-stock-photo-open-old-recipe-book.jpg"
            }
       }else{
            recipes = recipes.data.meals[Math.ceil(Math.random()*recipes.data.meals.length)]
       }
        
       this.setState({
         recipes,
         country
       })
          

            
       
        // .then(()=>
        //     axios.get(`https://musicbrainz.org/ws/2/artist?query=area:${this.state.country.name}&limit=20&fmt=json`)).then(result=>{             
        //         this.setState({
        //             allArtists:result.data.artists
        //         })
        //     })
            // puxando nome do artista na API musicBrainz
            // .then(()=>{
            //     this.setState({
            //         rndartist:this.state.allArtists[Math.floor(Math.random()*this.state.allArtists.length)]
            //     })
            // })
    }
        
           

    render(){
        console.log(this.state.recipes)
        return (
            
            <div>
                <Navbar/>
                <div className="country-page-container">
                    <section className="country-details">
                        <div><img className ="countrypage-img-country"src={this.state.country.flag} alt={`img-${this.state.country.name}`}/></div>
                        <article className="article-country">
                        <h2 id="country-page-name">{this.state.country.name}</h2>
                        <h3 className="country-page-capital">Capital: {this.state.country.capital}</h3>
                        <h3 className="country-page-capital">Region: {this.state.country.region}</h3>
                        <h3 className="country-page-capital">Area: {this.state.country.area} km<sup>2</sup></h3>
                        <div className="country-page-list-languages">Language(s): <ul>{this.state.country.languages?this.state.country.languages.map(language=><li>{language.name} </li>):<li>language</li>}</ul></div>
                        </article>
                    </section>
                    <section>
                        <div>
                            <RandomRecipeCard image={this.state.recipes.strMealThumb} demonym={this.state.recipes.demonym}/>
                        </div>
                        <div>

                        </div>
                        <div>
                            <div>
                                
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        )
    }
}

export default CountryPage
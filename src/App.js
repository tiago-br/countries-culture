import { Component } from 'react';
import { Route, Switch } from 'react-router';

import Home from './components/Home';
import RecipesList from './components/RecipesList'
import CountryPage from './components/CountryPage';
import RecipeDetails from './components/RecipeDetails';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import AboutUs from './components/AboutUs';

import '../src/components/Navbar.css'
import '../src/components/CountryPage.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about-us' component={AboutUs}></Route>
          <Route exact path='/country:countryName' component={CountryPage}></Route>
          <Route exact path='/country:countryName/recipes:demonym' component={RecipesList}></Route>
          <Route exact path='/country:countryName/recipes:demonym/:recipe' component={RecipeDetails}></Route>
          <Route exact path='/country:countryName/movies:demonym' component={MoviesList}></Route>
          <Route exact path='/country:countryName/movies:demonym/:id' component={MovieDetails}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;


import { Component } from 'react';
import { Route, Switch } from 'react-router';

import Home from './components/Home';
import RecipesList from './components/RecipesList'


import 'bulma/css/bulma.min.css';
import '../src/components/Navbar.css'
import '../src/components/CountryPage.css'
import './App.css';

import CountryPage from './components/CountryPage';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          {/* <Route exact path='/about-us' component={About}></Route> */}
          {/* <Route exact path='/random-country' component={RandomCountry}></Route> */}
          <Route exact path='/country:countryName' component={CountryPage}></Route>
          <Route exact path='/country:countryName/recipes:demonym' component={RecipesList}></Route>
          <Route exact path='/country:countryName/recipes:demonym/:recipe' component={RecipeDetails}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

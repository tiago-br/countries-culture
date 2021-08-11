
import { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home';
import 'bulma/css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          {/* <Route exact path='/about-us' component={About}></Route> */}
          {/* <Route exact path='/random-country' component={RandomCountry}></Route> */}
        </Switch>
      </div>
    );
  }
}

export default App;

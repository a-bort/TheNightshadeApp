import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Plants from './pages/Plants';
import AddPlantForm from './components/forms/AddPlantForm';
import LoginForm from './components/forms/LoginForm';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/plants" component={Plants}/>
          <Route path="/add" component={AddPlantForm}/>
          <Route path="/login" component={LoginForm}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    )
  }
}

export default App;

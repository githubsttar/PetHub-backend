import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import PetsListings from './components/PetsListings';
import Pet from './components/Pet';
import Navbar from './components/Navbar'
import Router from "react-router/Router";
import Route from "react-router/Route";
import Switch from "react-router/Switch";
import 'semantic-ui-css/semantic.min.css';
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import PetsForm from "./components/PetsForm";

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div className="App">
          <Container>
            <Switch>
              <Route exact path="/pets" component={PetsListings}/>
              <Route exact path="/pets/create" component={PetsForm}/>
              <Route exact path="/pets/:id" component={Pet}/>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;

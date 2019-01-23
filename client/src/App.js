import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import PetsListings from './components/PetsListings';
import Pet from './components/Pet';
import Navbar from './components/Navbar'
import Router from "react-router/Router";
import Route from "react-router/Route";
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
            <Route path="/pets" exact component={PetsListings}/>
            <Route path="/pets/:id" exact component={Pet}/>
            <Route path="/create" exact component={PetsForm}/>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;

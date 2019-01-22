import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import PetsListings from './components/PetsListings';
import Router from "react-router/Router";
import Route from "react-router/Route";
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div className="App">
          <Container>
            <Route path="/pets" exact component={PetsListings}/>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;

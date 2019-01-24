import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import Layout from './components/Layout'
import PetsListings from './components/PetsListings';
import Pet from './components/Pet';
import Router from "react-router/Router";
import Route from "react-router/Route";
import 'semantic-ui-css/semantic.min.css';
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import PetsForm from "./components/PetsForm";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history={createBrowserHistory()}>
        <Layout>
          <Container>
            <Route path="/pets" exact component={PetsListings}/>
            <Route path="/pets/:id" exact component={Pet}/>
            <Route path="/create" exact component={PetsForm}/>
          </Container>
        </Layout>
      </Router>
      </div>
    );
  }
}

export default App;

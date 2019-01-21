import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Posts from './components/Posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
            <Posts />
          </Container>
      </div>
    );
  }
}

export default App;

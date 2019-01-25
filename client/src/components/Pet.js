import React, {Component} from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import Layout from './Layout'

class Pet extends Component {
  constructor() {
    super();
    this.state = {};
    this.getPet = this.getPet.bind(this)
  }

  componentDidMount() {
    this.getPet();
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getPet() {
    this.fetch(`http://localhost:3001/pets/${this.props.match.params.id}`)
    .then(pet => {
      this.setState({pet: pet});
    })
  }

  render () {
    let {pet} = this.state;
    return pet
    ? <div>
        <Header as='h1' textalign='center'>
          <Header.Content>{pet.name}</Header.Content>
        </Header>
        <Image centered size='large' src={`data:image/jpeg;base64,${pet.image}`} />
        <h2>{pet.description} </h2>
        <h3>Owned by {pet.owner} </h3>
      </div>
    : <div>
        <p> No pets :( </p>
      </div>

  }

}

export default Pet;

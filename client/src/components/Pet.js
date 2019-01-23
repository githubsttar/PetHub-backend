import React, {Component} from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';
import Navbar from './Navbar'

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
    this.fetch(`/pets/${this.props.match.params.id}`)
    .then(pet => {
      this.setState({pet: pet});
    })
  }

  render () {
    let {pet} = this.state;
    return pet
    ? <Container>
      <Navbar />
        <p>Name: {pet.name} </p>
        <p>Description: {pet.description} </p>
        <p>Owner: {pet.owner} </p>
      </Container>
    : <Container text>
         <Dimmer active inverted>
           <Loader content='Loading' />
         </Dimmer>
       </Container>
  }

}

export default Pet;
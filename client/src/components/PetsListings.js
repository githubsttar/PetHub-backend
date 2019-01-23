import React, {Component} from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';
import Navbar from './Navbar'

class PetsListings extends Component {
  constructor() {
    super();
    this.state = {};
    this.getPets = this.getPets.bind(this);
    this.getPet = this.getPet.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange(id){
    let path = `/pets/${id}`;
    this.props.history.push(path);
  }

  componentDidMount() {
    this.getPets();
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getPets() {
    this.fetch('/pets')
      .then(pets => {
        if (pets.length) {
          console.log(pets[1]['name'] == 'cat')
          this.setState({pets: pets});
          this.getPet(pets[0].id)
        } else {
          this.setState({pets: []})
        }
      })
  }

  getPet(id) {
    this.fetch(`/pets/${id}`)
      .then(pet => this.setState({pet: pet}))
  }

  render () {
   let {pets, pet} = this.state;
     return pet
       ? <Container text>
          <Navbar />
           <Divider hidden section />
           {pets && pets.length
             ? <Button.Group color='grey' fluid widths={pets.length}>
               {Object.keys(pets).map((key) => {
                 return <Button active={pet && pet.id === pets[key].id} fluid key={key} onClick={() => this.routeChange(pets[key].id)}>
                   <p>Name: {pets[key].name} </p>
                   <p>Description: {pets[key].description} </p>
                   <p>Owner: {pets[key].owner} </p>
                 </Button>
                 })}
             </Button.Group>
             : <Container textAlign='center'>No Pets found.</Container>
           }
           <Divider section />
       </Container>
     : <Container text>
         <Dimmer active inverted>
           <Loader content='Loading' />
         </Dimmer>
       </Container>
   }

}

export default PetsListings;

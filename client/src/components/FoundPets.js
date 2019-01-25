import React, {Component} from 'react';
import { Container, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';

class FoundPets extends Component {

  constructor() {
    super();
    this.state = {};
    this.getPets = this.getPets.bind(this);
    this.getPet = this.getPet.bind(this);
  }

  componentDidMount() {
    this.getPets();
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        var result = [];
        for (var i=0; i < data.length; i++){
          if (data[i]['tag'] === 'Found'){
            result.push(data[i])
          }
        }

        return result
      })
      .catch(error => console.log(error))
  }

  getPets() {
    console.log(true);
    this.fetch('/pets')
      .then(pets => {
        if (pets.length) {
          this.setState({pets: pets});
          this.getPet(pets[0].id)
        } else {
          this.setState({pets: []});
        }
      })
  }

  getPet(id) {
    this.fetch(`/pets/${id}`)
      .then(pet => this.setState({pet: pet}))
  }


  render () {
    console.log("something");
    let {pets, pet} = this.state;
     return pets
       ? <Container text>
           <Divider hidden section />
           {pets && pets.length
             ? <Card.Group itemsPerRow={2}>
               {Object.keys(pets).map((key) => {

                var thing = pets[key].tag
                
                  return <Card
                  image="http://lorempixel.com/400/400/animals"
                  header={pets[key].name}
                  description={pets[key].description}
                  meta={pets[key].tag}
                  />
                

            })}
             </Card.Group>
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

export default FoundPets;

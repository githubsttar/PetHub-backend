import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Posts extends Component {
    constructor () {
        super();
        this.state = {};
        this.getPets = this.getPets.bind(this);
        this.getPet = this.getPet.bind(this)
    }
    componentDidMount() {
        this.getPets();
    }

    fetch (endpoint) {
        return window.fetch(endpoint)
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    getPets () {
        this.fetch('/pets')
            .then(pets => {
                if (pets.length) {
                    this.setState({pets: pets});
                    this.getPet(pets[0].id)
                } else {
                    this.setState({pets: []})
                }
            })
    }

    getPet (id) {
        this.fetch(`/pets/${id}`)
            .then(pet => this.setState({pet: pet}))
    }

    render () {
        let {pets, pet} = this.state;
        return pet
            ? <Container text>
                <Header as='h2' icon textAlign='center' color='teal'>
                    <Icon name='unordered list' circular />
                    <Header.Content>
                        Pets
                    </Header.Content>
                </Header>
                <Divider hidden section />
                {pets && pets.length
                    ? <Button.Group color='teal' fluid widths={pets.length}>
                        {Object.keys(pets).map((key) => {
                            return <Button active={pet && pet.id === pets[key].id} fluid key={key} onClick={() => this.getPet(pets[key].id)}>
                                {pets[key].name}
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

export default Posts;
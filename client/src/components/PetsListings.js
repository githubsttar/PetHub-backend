import React, { Component } from 'react';
import { Container, Header, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class PetsListings extends Component {
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

    }

}

export default PetsListings;
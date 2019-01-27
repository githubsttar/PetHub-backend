import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {
  Container,
  Icon,
  Menu
} from "semantic-ui-react";


class NavBar extends Component{
 constructor(){
    super();
    this.state={ activeItem: "home" }
  }

  handleClick(condition) {
  
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Container className='menu'>
        <Menu.Item className='menu__link'>
          PetHub
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/"
          name='home'
          active={activeItem === 'home'}>
          <Icon name="home"/>Home
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets"
          name='allPets'
          active={activeItem === 'allPets'}>
          <Icon name="paw"/>View All Pets
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets/found"
          name='tagfound'
          active={activeItem === 'filtered'}
          onClick={this.handleClick}>
          <Icon name="paw"/>View Found Pets
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets/lost"
          name='taglost'
          active={activeItem === 'filtered'}
          onClick={this.handleClick}>
          <Icon name="paw"/>View Lost Pets
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets/create"
          name='newPets'
          active={activeItem === 'newPets'}>
          <Icon name="home"/>Post a Pet
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/users/new"
          name='register'
          active={activeItem === 'register'}>
          <Icon name="pencil"/>Register
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/login"
          name='login'
          active={activeItem === 'login'}>
          <Icon name="sign-in"/>Login
        </Menu.Item>
      </Container>
    )
  }
}
export default NavBar;

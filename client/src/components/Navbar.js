
import React, {Component} from 'react';
import logo from './logo.png';
import searchIcon from './search-icon.png';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

class Navbar extends Component {

  render() { 
    return (
      <div className="container center">
        <nav className="menu">
          <h1 className="menu__logo">Epic Co.</h1>
          <div className="menu__right">
            <ul className="menu__list">
              <li className="menu__list-item"><a className="menu__link menu__link--active" href="/pets">Home</a></li>
              <li className="menu__list-item"><a className="menu__link" href="/pets/create">Report a Pet</a></li>
              <li className="menu__list-item"><a className="menu__link" href="#">User</a></li>
            </ul>
          </div>
        </nav>
    </div>
    )
  }
}

export default Navbar;
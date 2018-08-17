import React, {Component} from 'react';
import NavLink from './NavLink';
import { mainPath, cartPath, contactsPath } from '../helpers/routes';

class MainMenu extends Component {
  render() {
    return (
      <nav>
        <NavLink to={mainPath()}>Home</NavLink>
        <NavLink to={cartPath()}>Cart</NavLink>
        <NavLink to={contactsPath()}>Contacts</NavLink>
      </nav>
    )
  }
}

export default MainMenu;

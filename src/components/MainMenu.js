import React, {Component} from 'react';
import Link from './Link';
import { mainPath, cartPath, contactsPath } from '../helpers/routes';

class MainMenu extends Component {
  render() {
    return (
      <nav>
        <Link to={mainPath()}>Catalog</Link>
        {' '}
        <Link to={cartPath()}>Cart</Link>
        {' '}
        <Link to={contactsPath()}>Contacts</Link>
      </nav>
    )
  }
}

export default MainMenu;

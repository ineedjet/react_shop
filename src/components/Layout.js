import React, {Component} from 'react';
import MainMenu from "./MainMenu";

class Layout extends Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <div>{ this.props.children }</div>
      </div>
    )
  }
}

export default Layout;
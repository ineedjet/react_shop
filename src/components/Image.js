import React, {Component} from 'react';
import {acessToken, spaces} from '../constants/access';
import request from "superagent";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { image: false } ;
  }

  componentDidMount() {
    request
      .get(`https://cdn.contentful.com/spaces/${spaces}/assets/${this.props.image}`)
      .set('Authorization', `Bearer ${acessToken}`)
      .then(({body}) => {
        this.setState({ image: body })
      });
  }

  render() {
    const {url} = this.state.image && this.state.image.fields.file;

    return (
      <span>
        { this.state.image && <img
          src={url}
          width={this.props.width}
          height={this.props.height}
        />}
      </span>
    )
  }
}

export default Image;

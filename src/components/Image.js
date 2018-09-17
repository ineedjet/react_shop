import React, {Component} from 'react';

class Image extends Component {
  render() {
    console.log(this.props.image);
    const {url, width, height} = this.props.image;

    return (
      <img
        src={url}
        width={width}
        height={height}
      />
    )
  }
}

export default Image;

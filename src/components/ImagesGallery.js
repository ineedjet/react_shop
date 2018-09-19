import React, {Component} from 'react';
import Image from './Image';

class ImagesGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {bigImage: false};
    this.setBigImage = this.setBigImage.bind(this);
  }

  setBigImage(image) {
    this.setState({bigImage: image})
  }

  render() {
    return (
        <div>
          <p>
            { this.state.bigImage &&
              <Image key={`bigImage-${this.state.bigImage}`}
                     image={this.state.bigImage}
                     width = '400'
                     height = '300'
              />
            }
          </p>
          <p>
            { this.props.images.map( (image, index) => (
              <span onClick={() => this.setBigImage(image.sys.id)} key={`image-${image.sys.id}-${index}`}>
                <Image image={image.sys.id}
                       width = '150'
                       height = '100'
                />
              </span>
            ))}
          </p>
        </div>
    )
  }
}

export default ImagesGallery;

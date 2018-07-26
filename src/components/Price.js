import React, {Component} from 'react';

class Price extends Component {
    render() {
        return (
            <span>
                цена: {this.props.children} рублей
            </span>
        )
    }
}

export default Price;

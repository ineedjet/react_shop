import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { products } from './src/constants/Products';
import Catalog from "./src/components/Catalog";


class App extends Component {
    render() {
        return (
            <div>
                <Catalog products={products} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

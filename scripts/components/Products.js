import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ProductCard from '../components/ProductCard';


class Products extends Component {
    constructor(props) {
        super(props);
        this.renderProducts.bind(this);
    }

    renderProducts() {
        const chunk = 5;
        const {items} = this.props.products;

        let result = [];
        for (let i = 0; i < items.length; i += chunk) {
            let productCards = items.slice(i, i + chunk).map((product) => {
                return <div className='col-1-5'><ProductCard product={product} /></div>
            });

            if (productCards.length < chunk) {
                for (let j = 0; j < chunk - productCards.length + 1; j++) {
                    productCards.push(<div className='col-1-5'></div>);
                }
            }

            result.push(
                <div className='products-row grid'>{productCards}</div>
            );
        }

        return result;
    }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.object.isRequired,
};

export default Products;

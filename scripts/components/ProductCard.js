import React, {Component, PropTypes} from 'react';
import {formatProductTitle} from '../helpers/Format';

class ProductCard extends Component {
    render() {
        const {product} = this.props;
        const image = product.artwork_url.replace('large', 't300x300');
        return (
            <div className='card product-card'>
                <div className='product-card-image' style={{backgroundImage: `url(${image})`}} />
                <div className='product-card-user'>
                    <img className='product-card-user-image' src={product.user.avatar_url} />
                    <div className='product-card-details'>
                        <div className='product-card-title'>{formatProductTitle(product.title)}</div>
                        <div className='product-card-user-username'>{product.user.username}</div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductCard;

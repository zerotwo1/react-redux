import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';

import Header from '../components/Header';
import Products from '../components/Products';

class App extends Component {
    componentDidMount () {
        const {dispatch} = this.props;
        dispatch(fetchProducts());
    }

    render() {
        const {products} = this.props;
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className='content'>
                        <Products products={products} />
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { products } = state;
    return {
        products,
    };
}


export default connect(mapStateToProps)(App);

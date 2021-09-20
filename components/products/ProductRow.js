import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../products/ProductCard';

class ProductRow extends Component {
  render() {
    const { products } = this.props;
    const reg = /(<([^>]+)>)/ig;

    return (
      // <div className="row mb-5">
      <div className="card-deck align-items-stretch">
        {products.map((product) => (
          <div key={product.id} className="flex-wrap col-6 col-sm-6 col-lg-3">
            <ProductCard
              permalink={product.permalink}
              image={product.media.source}
              name={product.name}
              description={product.description && product.description.replace(reg, '')}
              soldOut={false}
              // soldOut={product.is.sold_out}
            />
          </div>
        ))}
      </div>
    );
  }
}

ProductRow.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductRow.defaultProps = {
  products: [],
};

export default ProductRow;

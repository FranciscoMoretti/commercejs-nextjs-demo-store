import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOptions: [],
    }

  }

  /**
   * Get symbol of formatted price
   */
  getCurrencySymbol(priceFormattedWithSymbol) {
    return priceFormattedWithSymbol.substring(1, 0);
  }


  render() {
    const {
      name,
      description,
      price,
      variant_groups: variantGroups,
    } = this.props.product;

    const soldOut = false;
    // const soldOut = this.props.product.is.sold_out;

    const { selectedOptions } = this.state;
    const reg = /(<([^>]+)>)/ig;

    return (
      <div>
        {/* Product Summary */}
        <p className="font-size-display3 font-family-secondary mt-2 mb-2">
          {name}
        </p>
        <div className="mb-4 pb-3 font-size-subheader">{(description || '').replace(reg, '')}</div>

        {/* Add to Cart & Price */}
        <div className="d-flex py-4">
        </div>
      </div>
    );
  }
}

export default connect(state => state)(ProductDetail);

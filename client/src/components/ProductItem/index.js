import React from 'react';
import './index.css';


class ProductItem extends React.Component {
  render() {
    let { src, desc, calories } = this.props;

    return (
      <div className="product-item">
        <img className="product-img" src={src}></img>
        <div className="product-desc">{desc}</div>
        <div className="product-calories">
          <span>High Protein</span>
          <span>Calories: {calories}</span>
        </div>
        <div className="product-add-to-cart">
            Add to Cart
        </div>
    </div>
    );
  }
};

export default ProductItem;
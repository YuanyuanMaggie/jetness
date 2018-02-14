import React from 'react';
import AddToCart from '../AddToCart';
import './index.css';


class SupplementItem extends React.Component {
  render() {
    let { src, desc, price } = this.props;

    return (
      <div className="supplement-item">
        <img className="supplement-img" src={src}></img>
        <div className="supplement-desc">{desc}</div>
        <div className="supplement-price">${price}</div>
        <AddToCart />
    </div>
    );
  }
};

export default SupplementItem;
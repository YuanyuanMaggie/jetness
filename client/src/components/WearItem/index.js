import React from 'react';
import AddToCart from '../AddToCart';
import './index.css';


class WearItem extends React.Component {
  render() {
    let { src, brand, desc, price } = this.props;

    return (
      <div className="wear-item">
        <img className="wear-img" src={src}></img>
        <div className="wear-brand">{brand}</div>
        <div className="wear-desc">{desc}</div>
        <div className="wear-price">${price}</div>
    </div>
    );
  }
};

export default WearItem;
import React from 'react';
import AddToCart from '../AddToCart';
import './index.css';


class MealItem extends React.Component {
  render() {
    let { src, desc, calories } = this.props;

    return (
      <div className="meal-item">
        <img className="meal-img" src={src}></img>
        <div className="meal-desc">{desc}</div>
        <div className="meal-calories hide-small">
          <span>High Protein</span>
          <span>Calories: {calories}</span>
        </div>
        <AddToCart />
    </div>
    );
  }
};

export default MealItem;
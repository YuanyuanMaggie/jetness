import React from 'react';
import Checkbox from './Checkbox';
import InputPlaceHolder from './InputPlaceHolder';
import './Goal.css';


class Goal extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: false,
    };
  }

  toggle = () => {
    let selected = !this.state.selected;

    this.setState({ selected });
  }

  render() {
    let { name, src, weight } = this.props;
    let { selected } = this.state;

    return (
      <div className="goal">
        <div className={`goal-status ${selected ? 'selected' : 'not-selected' }`} onClick={this.toggle}>
          <Checkbox />
        </div>
        <div className="goal-detail">
          <div className="goal-name">{name}</div>
          {
            weight && <div className="goal-pound">Pounds <InputPlaceHolder placeholder='10' /></div>
          }
        </div>
        <img src={src}></img>
      </div>
    );
  }
}

export default Goal;

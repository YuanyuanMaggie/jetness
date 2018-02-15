import React from 'react';
import './Checkbox.css'


class Checkbox extends React.Component {
  render() {
    let { name } = this.props;

    return (
      <div className="square absolute">
        <i className="icon-check absolute"></i>
      </div>
    );
  }
}

export default Checkbox;

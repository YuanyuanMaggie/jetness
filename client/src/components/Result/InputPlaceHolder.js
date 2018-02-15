import React from 'react';
import './InputPlaceHolder.css'


class InputPlaceHolder extends React.Component {
  render() {
    let { placeholder } = this.props;

    return (
      <div className="input-placeholder">{placeholder}</div>
    );
  }
}

export default InputPlaceHolder;

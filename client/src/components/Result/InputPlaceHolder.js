import React from 'react';
import './InputPlaceHolder.css'


class InputPlaceHolder extends React.Component {
  render() {
    let { placeholder } = this.props;

    return (
      <input className="input-placeholder" placeholder={placeholder}/>
    );
  }
}

export default InputPlaceHolder;

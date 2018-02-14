import React from 'react';
import Slider from 'react-slick';

import MealItem from '../MealItem';
import WearItem from '../WearItem';
import SupplementItem from '../SupplementItem';

import './index.css';

const ResultHeader = () => (
    <div className="result-header">
        <div className="hi">Hi Lizzy!</div>
        <h2 className="font-bold">Check Your Results</h2>
        <div className="result">
            <span className="pr1">Height</span>
            <span className="font-bold pr2">5'5''</span>
            <span className="pr1">Weight</span>
            <span className="font-bold pr2">125 Lb</span>
            <span className="pr1">BMI</span>
            <span className="font-bold pr2">23</span>
            <span className="pr1">Body Fat</span>
            <span className="font-bold pr2">30%</span>
        </div>
        <div className="progress">
            <div className="done"></div>
            <div className="done"></div>
            <div className="not-done"></div>
        </div>
        <div className="status">
            <div>Under Weight</div>
            <div>Normal Weight</div>
            <div>Over Weight</div>
        </div>
    </div>
)

class ResultForm extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
};

class SetDate extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
};

class SetGoal extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
};

const Result = () => (
    <div className="result">
        <ResultHeader />
        <ResultForm/>
        <SetDate/>
        <SetGoal/>
    </div>
)

export default Result;
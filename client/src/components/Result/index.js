import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import MealItem from '../MealItem';
import WearItem from '../WearItem';
import SupplementItem from '../SupplementItem';
import InputPlaceHolder from './InputPlaceHolder';
import Goal from './Goal';

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
      <div className="result-form">
        <video width="400" height="320" controls loop autoPlay>
          <source src="images/3d-body.mp4" type="video/mp4"></source>
        </video>

        <div className="form">
          <div className="top">
            <div className="title">TOP (INCH)</div>
            <div className="top-result">
              <div className="top-header">
                <span>Shoulder</span>
                <span>Sleeve</span>
                <span>Chest</span>
                <span>Waist Middle</span>
                <span>Waist Bottom</span>
              </div>
              <div className="top-body">
                <span>16.38</span>
                <span>21.92</span>
                <span>36.60</span>
                <span>29.48</span>
                <span>30.48</span>
              </div>
            </div>
            <div className="top-size">
              <div>Your Top Size</div><InputPlaceHolder placeholder='M' /><InputPlaceHolder placeholder='US6' />
            </div>
          </div>

          <div className="bottom">
            <div className="title">BOTTOM</div>
            <div className="bottom-result">
              <div className="bottom-header">
                <span>Hips</span>
                <span>Top of Thigh</span>
                <span>Around Calf</span>
                <span>Size Knee</span>
                <span>Below Buttock to Heal</span>
              </div>
              <div className="bottom-body">
                <span>37.75</span>
                <span>22.52</span>
                <span>14.57</span>
                <span>24.70</span>
                <span>30%</span>
              </div>
            </div>
            <div className="bottom-size">
              <div>Your Bottom Size</div><InputPlaceHolder placeholder='M' />
              <div>Shoes Size</div><InputPlaceHolder placeholder='8' />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

class SetDate extends React.Component {
  render() {
    return (
      <div className="set-date">
        <div className="title">Set a date for your goal</div>
        <div className="day">
          <div>Day</div><InputPlaceHolder placeholder='3' /><div className="icon-caret-down"></div>
        </div>
        <div className="month">
          <div>Month</div><InputPlaceHolder placeholder='10' /><div className="icon-caret-down"></div>
        </div>
      </div>
    );
  }
};

class SetGoal extends React.Component {
  render() {
    let goals = [
      { name: 'Feel Better', src: 'images/plan1.png', weight: false },
      { name: 'Loose Weight', src: 'images/plan2.png', weight: true },
      { name: 'Gain Weight', src: 'images/plan3-.png', weight: true },
      { name: 'Boost Your Energy', src: 'images/plan4.png', weight: false },
      { name: 'Immunity', src: 'images/plan5.png', weight: false },
      { name: 'Recomp', src: 'images/plan6.png', weight: false },
    ];

    return (
      <div className="set-goal">
        <div className="title">Set your goals</div>
        <div className="goals">
          {
            goals.map((goal, i) => 
              <div key={i} className="goal-wrwapper xlarge-4 large-4 medium-6 small-12">
                <Goal name={goal.name} src={goal.src} weight={goal.weight} />
              </div>
            )
          }
        </div>
      </div>
    );
  }
};

class SetGoalButton extends React.Component {
  render() {
    return (
      <Link to="/recommendations" className="set-goal-button">Set The Goal</Link>
    );
  }
}

const Result = () => (
    <div className="result">
        <ResultHeader />
        <ResultForm />
        <SetDate />
        <SetGoal />
        <SetGoalButton />
    </div>
)

export default Result;
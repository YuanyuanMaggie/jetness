import React from 'react';
import RecoBanner from './ReconBanner';
import Slider from 'react-slick';

import MealItem from '../MealItem';
import WearItem from '../WearItem';
import SupplementItem from '../SupplementItem';

import './index.css';

const RecoHeader = () => (
    <div className="reco-header">
        <div>Hi, Lizzy!</div>
        <h2 className="font-bold">Here are your recommendations</h2>
        <div>
            <span className="font-bold pr2">Your results:</span> 
            <span className="pr1">Height</span>
            <span className="font-bold pr2">5'5''</span>
            <span className="pr1">Weight</span>
            <span className="font-bold pr2">150 Lb</span>
            <span className="pr1">BMI</span>
            <span className="font-bold pr2">23</span>
        </div>
        <div>
            <span className="font-bold pr2">Your Goal:</span> 
            <span className="pr1 font-bold">Loose Weight</span>
            <span className="">(10 Lb)</span>
        </div>
    </div>
)

class RecoMeals extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        let meals = [
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/plan1.png', calories: 400 },
            { desc: 'Roasted Salmon Glazed With Brown Sugar and Mustard', src: 'images/plan2.png', calories: 500 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/plan3-.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/plan4.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/plan5.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/plan6.png', calories: 400 },
        ];
    
        return (
            <div className="reco-meals">
                <div className="reco">
                    <div className="title">Recommendations to reach your goal: </div>
                    <div className="see-all">See all</div>
                </div>
                <div className="meals">
                    <Slider {...settings}>
                        {
                            meals.map((meal, i) => 
                                <div key={i}>
                                    <MealItem desc={meal.desc} calories={meal.calories} src={meal.src} />
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        );
    };
}

class ReconWears extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
        };
        let wears = [
            { brnad: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports1.png', price: 21 },
            { brnad: 'Nike', desc: 'Roasted Salmon Glazed With Brown Sugar and Mustard', src: 'images/sports2.png', price: 23.98 },
            { brnad: 'Adidas', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports3.png', price: 23.98 },
            { brnad: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports5.png', price: 23.98 },
            { brnad: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/s1.png', price: 23.98 },
            { brnad: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/s5.png', price: 23.98 },
        ];
    
        return (
            <div className="reco-wears">
                <div className="reco">
                    <div className="title">Activewear for you </div>
                    <div className="desc">The descriptions below can be copied and pasted into a Word Processor and then tweaked accordingly. </div>
                </div>
                <div className="wears">
                    <Slider {...settings}>
                        {
                            wears.map((wear, i) => 
                                <div key={i}>
                                    <WearItem desc={wear.desc} brand={wear.brand} price={wear.price} src={wear.src} />
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        );
    };
}

class ReconSupplyments extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
        };
        let supplements = [
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/supply2.png', price: 21 },
            { desc: 'Roasted Salmon Glazed With Brown Sugar and Mustard', src: 'images/supply2.png', price: 23.98 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/supply3.png', price: 23.98 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/supply4.png', price: 23.98 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/supply5.png', price: 23.98 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/supply6.png', price: 23.98 },
        ];
    
        return (
            <div className="reco-supplements">
                <div className="reco">
                    <div className="title">Supplements for you </div>
                    <a className="see-all" href="https://jet.com/search?term=vitamins">See all</a>
                </div>
                <div className="supplements">
                    <Slider {...settings}>
                        {
                            supplements.map((supplement, i) => 
                                <div key={i}>
                                    <SupplementItem desc={supplement.desc} price={supplement.price} src={supplement.src} />
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        );
    };
}

const Recommendation = () => (
    <div className="recommendation">
        <RecoHeader/>
        <RecoMeals/>
        <RecoBanner/>
        <ReconWears/>
        <ReconSupplyments/>
    </div>
)

export default Recommendation;
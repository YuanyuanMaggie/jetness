import React from 'react';
import RecoBanner from './ReconBanner';
import Slider from 'react-slick';

import ProductItem from '../ProductItem';

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
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'img', calories: 400 },
            { desc: 'Roasted Salmon Glazed With Brown Sugar and Mustard', src: 'img', calories: 500 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'img', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'img', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'img', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'img', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'img', calories: 400 },
        ];
    
        return (
            <div className="reco-meals">
                <div className="reco">
                    <div className="desc">Recommendations to reach your goal: </div>
                    <div className="see-all">See all</div>
                </div>
                <div className="meals">
                    <Slider {...settings}>
                        {
                            meals.map((meal, i) => 
                                <div key={i}>
                                    <ProductItem desc={meal.desc} calories={meal.calories} src={meal.src} />
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        );
    };
}

const ReconSupplyments = () => (
    <div className="reco-supplyments section">
        <div className="section-header font-bold">Activewear for you</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="log-input">
            <input type="text" placeholder="Update your data" className="py1 pl2 pr4 h5 search-box hide-small hide-medium"/>
        </div>
    </div>
)

const ReconWear = () => (
    <div className="reco-reconWear section">
        <div className="section-header font-bold">Supplements for you</div>
    </div>
)

const RecoResult = () => (
    <div className="reco-bottom">

    </div>
)

const Recommendation = () => (
    <div>
        <RecoHeader/>
        <RecoMeals/>
        <RecoBanner/>
        <ReconSupplyments/>
        <ReconWear/>
        <RecoResult/>
    </div>
)

export default Recommendation;
import React from 'react';
import RecoBanner from './ReconBanner';
import Slider from 'react-slick';
import RadialChart from '../RadialChart';
import MealItem from '../MealItem';
import WearItem from '../WearItem';
import SupplementItem from '../SupplementItem';
import InputPlaceHolder from '../Result/InputPlaceHolder';
import RecoHeader from './RecoHeader';
import './index.css';

const RecoVideo = () => (
    <div className="reco-video">
        <video autoPlay loop id="video-background" muted plays-inline="true">
            <source src="/images/keep.mp4" type="video/mp4"/>
        </video>
        <div className="video-wrapper"></div>
    </div>
)

const RecoData = () => (
    <div className="reco-data">
        <div className="reco-cell">
            <div></div>
            <div>Fat</div>
            <div>Carbs</div>
            <div>Protein</div>
            <div>Calories</div>
        </div>
        <div className="reco-cell">
            <div>Goal Of Nutritions:</div>
            <div className="font-extrabold">442.8</div>
            <div className="font-extrabold">442.8</div>
            <div className="font-extrabold">1000.8</div>
            <div className="font-extrabold">1900</div>
        </div>
        <div className="reco-cell border-bottom mb1">
            <div>In Your Cart:</div>
            <div className="font-extrabold">300</div>
            <div className="font-extrabold">300</div>
            <div className="font-extrabold">300</div>
            <div className="font-extrabold">900</div>
        </div>
        <div className="reco-cell">
            <div>To Reach Your Goal:</div>
            <div className="font-extrabold">142.8</div>
            <div className="font-extrabold">142.8</div>
            <div className="font-extrabold text-brand">700.8</div>
            <div className="font-extrabold">980</div>
        </div>
    </div>
)

class RecoMeals extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: false,
            draggable: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        };
        let meals = [
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-1.png', calories: 400 },
            { desc: 'Roasted Salmon Glazed With Brown Sugar and Mustard', src: 'images/reco/reco-2.png', calories: 500 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-3.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-4.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-5.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-6.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-7.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-8.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-9.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-10.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-11.png', calories: 400 },
            { desc: 'Spanish-Style Shrimp With Garlic', src: 'images/reco/reco-12.png', calories: 400 },
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
            draggable: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        }; 
        let wears = [
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-1.png', price: 21 },
            { brand: 'Nike', desc: 'Roasted Salmon Glazed With Brown Sugar and Mustard', src: 'images/sports-supplies/ss-2.png', price: 23.98 },
            { brand: 'Adidas', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-3.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-4.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-5.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-6.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-7.png', price: 21 },
            { brand: 'Nike', desc: 'Roasted Salmon Glazed With Brown Sugar and Mustard', src: 'images/sports-supplies/ss-8.png', price: 23.98 },
            { brand: 'Adidas', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-9.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-10.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-11.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-12.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-13.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-14.png', price: 23.98 },
            { brand: 'Nike', desc: 'Spanish-Style Shrimp With Garlic', src: 'images/sports-supplies/ss-15.png', price: 23.98 },
        ];
    
        return (
            <div className="reco-wears">
                <div className="reco">
                    <div className="title">Sports supplies for you</div>
                    <div className="desc">Here are our recommendations based on your data :) </div>
                    <div className="your-size">
                        <div className="your-top-size">
                            <div>Top</div><InputPlaceHolder placeholder='M' /><div className="icon-caret-down"></div>
                        </div>
                        <div className="your-bottom-size">
                            <div>Bottom</div><InputPlaceHolder placeholder='M' /><div className="icon-caret-down"></div>
                        </div>
                        <div className="your-shoes-size">
                            <div>Shoes</div><InputPlaceHolder placeholder='8' /><div className="icon-caret-down"></div>
                        </div>
                    </div>
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
            draggable: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                { breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        };
        let supplements = [
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-1.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-2.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-3.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-4.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-5.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-6.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-7.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-8.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-9.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-10.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-11.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-12.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-13.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-14.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-15.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-16.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-17.png', price: 21 },
            { desc: 'Aesop Spray Deodoran', src: 'images/supplements/supplements-18.png', price: 21 },
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
    <div className="">
        <RecoVideo/>
        <RecoHeader/>
        <div className="recommendation">
            <RadialChart/>
            <RecoData/>
            <RecoMeals/>
            <RecoBanner/>
            <ReconWears/>
            <ReconSupplyments/>
        </div>
    </div>
)

export default Recommendation;
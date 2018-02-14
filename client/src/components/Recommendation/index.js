import React from 'react';
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

const RecoMeals = () => (
    <div className="reco-meals">
        <div>Meals for you</div>
    </div>
)

const RecoBanner = () => (
    <div className="reco-banner">
        <div>Banner</div>
    </div>
)

const ReconSupplyments = () => (
    <div className="reco-supplyments">
        <div>Banner</div>
    </div>
)

const ReconWear = () => (
    <div className="reco-wear">
        <div>Banner</div>
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
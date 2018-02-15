import React from 'react';
const RecoHeader = () => (
    <div className="reco-header">
        <div className="reco-center">
            <img src="/images/lizzy.png" alt="lizzy" className="profile-img block mxauto"/>
            <h1 className="text-center font-extrabold">Welcome! Lizzy:)</h1>
            <h3 className="text-center">
                <span className="pr1">Height</span>
                <span className="font-bold pr4">5'5''</span>
                <span className="pr1">Weight</span>
                <span className="font-bold pr2">150 Lb</span>
                <span className="pr1">BMI</span>
                <span className="font-bold pr4">23</span>
                <span className="pr1">Body Fat</span>
                <span className="font-bold pr4">30%</span>
            </h3>
            <h3 className="text-center">HOW TO REACH YOUR GOAL</h3>
            <div className="suggestion">
                <div className="suggestion-item mx2">
                    <img src="/images/icon/icon-1.png" alt="fat" className="suggestion-icon"/>
                    <div>Fat</div>
                    <div className="font-extrabold price py1">442.8</div>
                    <div className="small">Grams Per Day</div>
                </div>
                <div className="suggestion-item mx2">
                    <img src="/images/icon/icon-2.png" alt="fat" className="suggestion-icon"/>
                    <div>Carbs</div>
                    <div className="font-extrabold price py1">1000.8</div>
                    <div className="small">Grams Per Day</div>
                </div>
                <div className="suggestion-item mx2">
                    <img src="/images/icon/icon-3.png" alt="fat" className="suggestion-icon"/>
                    <div>Protein</div>
                    <div className="font-extrabold price py1">444.8</div>
                    <div className="small">Grams Per Day</div>
                </div>
                <div className="suggestion-item mx2">
                    <img src="/images/icon/icon-4.png" alt="fat" className="suggestion-icon"/>
                    <div>Calories</div>
                    <div className="font-extrabold price py1">1200</div>
                    <div className="small">Calories Per Day</div>
                </div>
            </div>
        </div>
    </div>
)

export default RecoHeader;
import React from 'react';

const ResultModal = ({toggleRstModal}) => (
    <div className="result-modal">
        <div className="header-title my1 mxauto result-modal-header">
            <p className="h1 font-accent-semibold text-center mxauto relative vertical-center">Clapping! Cheering!</p>
        </div>
        <p className="py1 text-center">Congratulation! You made it! Now enjoy the moment and claim awards we picked for you!</p>

        <div className="gift">
            <div className="p1">
                <div className="font-bold text-center pb1">
                    15$ gift card for ClassPass
                </div>
                <img src="/images/gift1.png" alt="gift1" className="gift-img"/>
            </div>
            <div className="p1">
                <div className="font-bold text-center pb1">
                    Nike Ultimate Yoga Mat
                </div>
                <img src="/images/gift2.png" alt="gift2" className="gift-img"/>
            </div>
        </div>

        <p className="py1 text-center">Now you should be proud of yourself! Share it with your friends! </p>
        <button className="btn font-extrabold btn-send mxauto block" onClick={()=>{toggleRstModal(false)}}> Share It! </button>
    </div>
)

export default ResultModal;
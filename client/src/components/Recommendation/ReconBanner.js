import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ResultModal from './ResultModal';
import * as action from '../../actions';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content : {
      top: '50%',
      left: '50%',
      maxWidth: '768px',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      marginTop: '10px',
      padding: '0',
      transform: 'translate(-50%, -50%)'
    }
};

const Logging = ({toggleRstModal}) => (
    <div className="logging-modal">
        <div className="logging-top">
            <div className="section-header font-extrabold pb1">Update Your Data</div>
            <p>
                Update your data to check your goal.
            </p>
            <div className="log-input">
                <input type="text" placeholder="Update your data" className="py1 pl2 pr4 h5 log-box"/>
                <button className="btn font-extrabold btn-send" onClick={()=>{toggleRstModal(true)}}> Send </button>
            </div>
            <p className="py3 border-bottom">
                Or, you can scan again at the gym. <a className="font-bold text-brand">Book appointment</a>
            </p>
            <div className="section-header font-extrabold pb1">Update Your Data</div>
            <div>
                <span>March 20, 2017</span>
                <span className="text-brand font-bold pl2">150 Lb</span>
            </div>
            <div>
                <span>April 15, 2017</span>
                <span className="text-brand font-bold pl2">147 Lb</span>
            </div>
        </div>
        <div className="logging-bottom">
            <h2 className="font-extrabold logging-banner"><span className="text-brand">7 Lb </span>left for your goal! and to claim your Reward</h2>
        </div>
    </div>
)

const RecoBanner = ({toggleLogModal, showLogModal, toggleRstModal, showRstModal}) => (
    <div className="reco-banner">
        <h1 className="reco-banner-title font-bold">Reach your fitness goal and get rewards</h1>
        <button className="reco-banner-btn font-bold" onClick={() => {toggleLogModal(true)}}>Claim </button>
        <Modal
            isOpen={showLogModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
            onRequestClose={() => {toggleLogModal(false)}}
        >
            <a href="" class="close close-button" onClick={() => {toggleLogModal(false)}}><i class="icon-close text-gray-3 gray"></i></a>
            <Logging toggleRstModal={toggleRstModal} />
        </Modal>
        <Modal
            isOpen={showRstModal}
            style={customStyles}
            contentLabel="Result"
            ariaHideApp={false}
            onRequestClose={() => {toggleRstModal(false)}}
        >
            <a href="" class="close close-button" onClick={() => {toggleRstModal(false)}}><i class="icon-close text-gray-3 gray"></i></a>
            <ResultModal toggleRstModal={toggleRstModal}/>
        </Modal>
    </div>
)

function mapStateToProps(state){
    return {
        showLogModal: state.modal.logModal,
        showRstModal: state.modal.rstModal
    }
}

export default connect(mapStateToProps, action)(RecoBanner);
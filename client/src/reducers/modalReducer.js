import { TOGGLE_LOG_MODAL, TOGGLE_RST_MODAL } from '../actions/types';

const INIT_STATE = {
    logModal: false,
    rstModal: false
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case TOGGLE_LOG_MODAL:
        return {
            logModal:action.payload
        };
    case TOGGLE_RST_MODAL:
        return {
            rstModal:action.payload
        };
    default:
        return state;
  }
}
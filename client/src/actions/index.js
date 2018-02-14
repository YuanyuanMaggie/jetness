import { TOGGLE_LOG_MODAL, TOGGLE_RST_MODAL } from './types';

export const toggleLogModal = (data) => {
    return {type: TOGGLE_LOG_MODAL, payload: data};
}

export const toggleRstModal = (data) => {
    return {type: TOGGLE_RST_MODAL, payload: data};
}

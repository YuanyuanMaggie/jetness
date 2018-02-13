import { FETCH_USER } from '../actions/types';

const INIT_STATE = {
    email: 'yuanyuan.li@jet.com',
    name: 'yuanyuan.li'
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
        return action.payload || false;
    default:
        return state;
  }
}
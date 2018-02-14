import { FETCH_USER } from './types';

export const fetchUser = (data) => {
    return {type: FETCH_USER, payload: data};
}

import { JAVASCRIPT } from '../shared/javascript';
import { REACT } from '../shared/react';
import { PROGRAMMING } from '../shared/programming';

export const initialState = {
    javascript: JAVASCRIPT,
    react: REACT,
    programming: PROGRAMMING
};

export const Reducer = (state = initialState, action) => {
    return state;
};
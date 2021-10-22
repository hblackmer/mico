import { JAVASCRIPT } from '../shared/javascript';
import { REACT } from '../shared/react';

export const initialState = {
    javascript: JAVASCRIPT,
    react: REACT
};

export const Reducer = (state = initialState, action) => {
    return state;
};
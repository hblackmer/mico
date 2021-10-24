import { PROGRAMMING } from '../shared/programming';
import * as ActionTypes from './ActionTypes';

export const Programming = (state = PROGRAMMING, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ANSWER:
            return [...state, {"answer": action.payload}];
        default:
            return state;
    }
};
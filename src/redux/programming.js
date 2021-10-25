import { PROGRAMMING } from '../shared/programming';
import * as ActionTypes from './ActionTypes';

export const Programming = (state = PROGRAMMING, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ANSWER:
            let newState = [...state];
            let objIndex = newState.findIndex((obj => obj.id === action.payload.id));
            newState[objIndex].answer = action.payload.answer;
            return newState;
        default:
            return state;
    }
};
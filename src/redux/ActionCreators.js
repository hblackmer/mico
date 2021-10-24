import * as ActionTypes from './ActionTypes';

export const addAnswer = (answer) => ({
    type: ActionTypes.ADD_ANSWER,
    payload: {
        answer: answer
    }
});
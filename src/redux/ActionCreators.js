import * as ActionTypes from './ActionTypes';

export const addAnswer = (id, answer) => ({
    type: ActionTypes.ADD_ANSWER,
    payload: {
        id: id,
        answer: answer
    }
});
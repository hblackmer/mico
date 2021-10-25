import * as ActionTypes from './ActionTypes';

export const Questions = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_QUESTION:
            let newState = [...state, {
                id: action.payload.id,
                question: action.payload.question,
                answer: action.payload.answer,
                micoAnswer: action.payload.micoAnswer,
                source: action.payload.source
            }];
            return newState;
        default:
            return state;
    }
};
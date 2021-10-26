import * as ActionTypes from './ActionTypes';

export const Questions = (state = [], action) => {
    let newState = [];
    switch (action.type) {
        case ActionTypes.ADD_QUESTION:
            newState = [...state, {
                id: action.payload.id,
                question: action.payload.question,
                answer: action.payload.answer,
                micoAnswer: action.payload.micoAnswer,
                source: action.payload.source
            }];
            return newState;
        case ActionTypes.ADD_ANSWER:
            newState = [...state];
            let objIndex = newState.findIndex((obj => obj.id === action.payload.id));
            newState[objIndex].answer = action.payload.answer;
            return newState;
        default:
            return state;
    }
};
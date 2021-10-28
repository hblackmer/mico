import * as ActionTypes from './ActionTypes';

export const addAnswer = (id, answer) => ({
    type: ActionTypes.ADD_ANSWER,
    payload: {
        id: id,
        answer: answer
    }
});

export const addQuestion = (id, question, answer, micoAnswer, source, category) => ({
    type: ActionTypes.ADD_QUESTION,
    payload: {
        id: id,
        question: question,
        answer: answer,
        micoAnswer: micoAnswer,
        source: source,
        category: category
    }
});

export const addCustomization = (categories, length) => ({
    type: ActionTypes.ADD_CUSTOMIZATION,
    payload: {
        categories: categories,
        length: length
    }
});
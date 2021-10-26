import { React } from './react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { HtmlCss } from './htmlcss';
import { Javascript } from './javascript';
import { Programming } from './programming';
import { Questions } from './questions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            htmlcss: HtmlCss,
            javascript: Javascript,
            programming: Programming,
            react: React,
            questions: Questions,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
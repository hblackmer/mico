import { React } from './react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Css } from './css';
import { Html } from './html';
import { Javascript } from './javascript';
import { Programming } from './programming';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            css: Css,
            html: Html,
            javascript: Javascript,
            programming: Programming,
            react: React,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};
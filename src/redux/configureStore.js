import { createStore, combineReducers } from 'redux';
import { Css } from './css';
import { Html } from './html';
import { Javascript } from './javascript';
import { Programming } from './programming';
import { React } from './react';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            css: Css,
            html: Html,
            javascript: Javascript,
            programming: Programming,
            react: React
        })
    );

    return store;
};
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../../redux/configureStore';
import Main from '../Main/Main';
import './App.css';

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
    );
}
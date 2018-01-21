import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunkMiddleware from 'redux-thunk'
import ContactReducer from './reducers/ContactReducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './components/home.css'
import 'react-clock/dist/Clock.css'

//require('../node-modules/react-clock/dist/entry.css')
const store = createStore(ContactReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}>
    <Router><App /></Router></Provider>
    , document.getElementById('root'));
registerServiceWorker();

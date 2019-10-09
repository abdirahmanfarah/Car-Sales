import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  carReducer  from './reducers'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);
console.log(store);



const rootElement = document.getElementById('root');
ReactDOM.render(<Provider><App /> </Provider>, rootElement);

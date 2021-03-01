import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from "redux";
import {Provider} from 'react-redux';
import {myReducer} from './redux/myReducer'
import {arrayReducer} from './redux/arrayReducer'
import {userRedux} from './redux/userRedux'


const rootReducer = combineReducers({myReducer:myReducer,arrayReducer:arrayReducer,userRedux:userRedux})
console.log(rootReducer)


const store=createStore(rootReducer)
//console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

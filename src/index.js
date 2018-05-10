import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss'
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './AppRoutes';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux';
import pizzaReducer from './reducers/pizzaReducer';

const rootReducer = combineReducers({
  pizza:pizzaReducer
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
    <AppRoutes/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

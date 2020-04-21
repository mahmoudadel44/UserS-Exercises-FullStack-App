import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import  './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import {Provider} from 'react-redux'
// import {createStore,applyMiddleware,compose} from 'redux'
// import reducers from './reducers'
// import thunk from 'redux-thunk';
// const storeWithApplyMiddleware=applyMiddleware(thunk)(createStore)
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers,composeEnhancers(
//         applyMiddleware((thunk))
//       ));
ReactDOM.render(
  <BrowserRouter>
<App/>
</BrowserRouter>
,document.getElementById('root'));

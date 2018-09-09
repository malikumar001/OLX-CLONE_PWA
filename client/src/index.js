import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

// ================  IMAGE GALLARY CODE=================================
import "react-image-gallery/styles/css/image-gallery.css";
// ==================================================

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/index';
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

// registerServiceWorker();
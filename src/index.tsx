import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import App from './main/App';
import './static/styles/reset.css';
import reducer from './reducers';
import saga from './saga';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

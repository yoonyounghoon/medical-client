import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { sagaMiddleware } from 'modules';
import { Provider } from 'react-redux';
import { setPosition } from 'modules/position';

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      store.dispatch(
        setPosition({
          xPos: position.coords.latitude,
          yPos: position.coords.longitude,
        }),
      );
    },
    (e) => console.log('현재 위치를 가져오지 못했습니다.', e),
  );
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

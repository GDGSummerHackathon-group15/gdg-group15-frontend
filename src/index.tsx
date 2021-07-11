import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

WebFont.load({
  google: {
    families: ['Noto Sans KR'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

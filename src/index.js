import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Store } from './Store/Store.js';
import { Provider } from 'react-redux';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { Store } from './Store/Store.js';
import { Provider } from 'react-redux';

// Use createRoot to render your app
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);

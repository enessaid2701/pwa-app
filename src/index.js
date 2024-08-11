import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Service Worker modülü

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Service Worker'ı kaydederek çevrimdışı desteği aktifleştirin
serviceWorkerRegistration.register();

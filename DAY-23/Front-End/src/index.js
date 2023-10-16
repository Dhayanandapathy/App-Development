/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


reportWebVitals();
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import App from './App'; // Your root component

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// window.localStorage.removeItem("token")

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);

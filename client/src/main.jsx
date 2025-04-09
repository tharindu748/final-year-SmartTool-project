import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Redux Provider to make store accessible
import './index.css';  // Global styles (if any)
import App from './App.jsx';  // Main App component
import store from './redux/store';  // Import the Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrap your app with Redux Provider */}
      <App />
    </Provider>
  </StrictMode>
);

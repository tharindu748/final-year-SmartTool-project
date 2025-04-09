import { configureStore } from '@reduxjs/toolkit';  // Import Redux Toolkit's configureStore
import rootReducer from './reducers';  // Import your root reducer

const store = configureStore({
  reducer: rootReducer,  // Configure store with rootReducer
});

export default store;

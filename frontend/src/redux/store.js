// Example store configuration
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import dataReducer from './reducer/index'; // Import your reducer

const rootReducer = combineReducers({
  dataReducer,
  // Other reducers if any...
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

//combine epic
const rootEpic = combineEpics({}

);
//combine reducers
export const rootReducer = combineReducers({});

//create epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//connect middleware with store
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//create store with middleware
const Store = createStoreWithMiddleware(
  rootReducer,
);

export default Store;
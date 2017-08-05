import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import AuthReducer from './reducers/auth';
import PatientReducer from './reducers/patient';
import AuthEpic from "./epic/auth";
import patientEpic from "./epic/pateint";

//combine epic
const rootEpic = combineEpics(
  AuthEpic.signupEpic,
  patientEpic.addPatientEpic
);
//combine reducers
export const rootReducer = combineReducers({
    AuthReducer,
    PatientReducer
});

//create epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//connect middleware with store
const createStoreWithMiddleware =applyMiddleware(epicMiddleware)(createStore);

//create store with middleware
const Store = createStoreWithMiddleware(
  rootReducer,
);

export default Store;
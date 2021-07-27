import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
//reducers
import {weatherReducer, memberLoginReducer, memberRegisterReducer} from './reducers/index';
//dev-tool redux
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
//thunk
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const allReducer = combineReducers({
    weather: weatherReducer,
    memberLogin: memberLoginReducer,
    memberRegister: memberRegisterReducer,
})

const store = createStore(allReducer, enhancer);

export default store
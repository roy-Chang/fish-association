import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
//reducers
import {
    weatherReducer, 
    memberLoginReducer, 
    memberRegisterReducer, 
    shopingCartReducer, 
    shoppingCartListReducer, 
    shoppingCartBtnReducer,
    shoppingOrderDetailReducer,
    showOrderDetailReducer,
    memberLikeReducer,
    jumpRouterReducer
} from './reducers/index';
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
    shoppingCartContent: shopingCartReducer,
    shoppingCartList: shoppingCartListReducer,
    shoppingBtn: shoppingCartBtnReducer,
    shoppingOrderDetail: shoppingOrderDetailReducer,
    orderDetail: showOrderDetailReducer,
    like: memberLikeReducer,
    toRouter: jumpRouterReducer
})

const store = createStore(allReducer, enhancer);

export default store
import * as actionTypes from "../constant";


const productsList = []

export default (state = productsList, action) => {
    switch (action.type) {
        case actionTypes.SHOW_SHOPPING_CART_LIST: {
            const newState = [...state, action.data];
            return newState[newState.length - 1];
        }
        case actionTypes.CLEAR_CART_LIST: {
            const newState = [];
            return newState;
        }

        default:
            return state      
    }
    
}
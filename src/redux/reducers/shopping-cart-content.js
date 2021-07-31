import * as actionTypes from "../constant";


const products = []

export default (state = products, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEMS_TO_SHOPPING_CART: {
            const newState = [...state, action.data]
            return newState;
        }

        default:
            return state      
    }
    
}
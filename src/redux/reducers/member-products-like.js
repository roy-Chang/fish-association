import * as actionTypes from "../constant";

const productsLike = []

export default (state = productsLike, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_LIKE_ACTION: {
            const newState = action.data
            return newState
        }

        default:
            return state      
    }
    
}
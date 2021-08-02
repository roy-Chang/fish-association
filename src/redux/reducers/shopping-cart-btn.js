import * as actionTypes from "../constant";

const shoppingBtn = {
    isShow: false
}

export default (state = shoppingBtn, action) => {
    switch (action.type) {
        case actionTypes.SHOPPING_BTN_CHANGE: {
            const newState = {
                ...state,
                isShow: true
            }
            return newState
        }
        case actionTypes.SHOPPING_BTN_CHANGE_SWITCH: {
            const newState = {
                ...state,
                isShow: false
            }
            return newState
        }

        default:
            return state      
    }
    
}
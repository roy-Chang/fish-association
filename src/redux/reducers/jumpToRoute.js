import * as actionTypes from "../constant";


const defaultRouter = {
    toRouter: ''
}

export default (state = defaultRouter, action) => {
    switch (action.type) {
        case actionTypes.SHOPPING_BTN_CHANGE: {
            
        }

        default:
            return state      
    }
    
}
import * as actionTypes from '../constant';

const showOrderDetail = {}


export default (state = showOrderDetail, action) => {
    switch (action.type) {
        case actionTypes.SHOW_SHOPPING_DETAIL: {
            const newState = {
                action
            }
            return newState
        }
       
        default:
            return state 
    }
    
}
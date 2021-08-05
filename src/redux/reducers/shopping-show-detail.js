import * as actionTypes from '../constant';

const showOrderDetail = {}


export default (state = showOrderDetail, action) => {
    switch (action.type) {
        case actionTypes.SHOW_SHOPPING_DETAIL: {
            console.log(action)
            const newState = {
                ...state,
                ...action.orderDetail,
                itemArr: action.buyItems
            }
            return newState
        }
       
        default:
            return state 
    }
    
}
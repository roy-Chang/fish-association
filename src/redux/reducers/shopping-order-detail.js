import * as actionTypes from '../constant';

const defaultOrderDetail = {
    original_total: 0,
    discount_count: 0,
    pay_total: 0,
    pay_way: 1,
    deliver_way: 1,
    city: "",
    postal: 324,
    address: "",
    name: ""
}


export default (state = defaultOrderDetail, action) => {
    switch (action.type) {
        case actionTypes.SAVE_SHOPPING_CART_DETAIL: {
            const newState = {
                ...state,
                discount_count: action.data.discount_count
            }
            return newState
        }
        case actionTypes.SAVE_SHOPPING_DETAIL_ALL: {
            const newState = {
                ...state,
                original_total: action.data.original_total,
                pay_total: action.data.pay_total,
                pay_way: Number.parseInt(action.data.pay_way),
                deliver_way: Number.parseInt(action.data.deliver_way),
                city: action.data.city,
                postal: Number.parseInt(action.data.postal),
                address: action.data.address,
                name: action.data.name
            }
            return newState
        }
       
        default:
            return state      
    }
    
}
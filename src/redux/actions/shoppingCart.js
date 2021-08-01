import * as actionTypes from "../constant";
import axios from 'axios';


export const addShoppingCartItems = (data) => ({
    type: actionTypes.ADD_ITEMS_TO_SHOPPING_CART,
    data
})

export const showShoppingCartItems = (data) => ({
    type: actionTypes.SHOW_SHOPPING_CART_ITEMS,
    data
})

export const showShoppingCartList = (data) => ({
    type: actionTypes.SHOW_SHOPPING_CART_LIST,
    data
})

export const handleShoppingBtn = () => ({
    type: actionTypes.SHOPPING_BTN_CHANGE
})

export const handleShoppingBtnSwitch = () => ({
    type: actionTypes.SHOPPING_BTN_CHANGE_SWITCH
})

export const clearShoppingCartItems = () => ({
    type: actionTypes.CLEAR_SHOPPING_CART_ITEMS
})

export const axiosShowShoppingCartItems = (data) => {
    console.log(data)
    return (dispatch) => {
        // const token = localStorage.getItem("token");
        // axios
        //   .get('http://localhost:3000/api/cart', {
        //     headers: { Authorization: `Bearer ${token}` },
        //   })
        //   .then()
    }
}
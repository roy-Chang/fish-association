import * as actionTypes from "../constant";
import axios from 'axios';
import { filterAxiosCartItems, splitArrCartItems } from '../../utils/handleFilterItemData';

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
//----order detail
export const saveOrderDetail = (data) => ({
    type: actionTypes.SAVE_SHOPPING_CART_DETAIL,
    data
})

export const saveOrderDetailAll = (data) => {
    return(dispatch) => {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios.post('http://localhost:3000/api/order/products',  {order_details: data},  {headers})
          .then((res) => {
                const action = ({
                  type: actionTypes.SAVE_SHOPPING_DETAIL_ALL,
                  data
                })
                dispatch(action)
            
          })
          .catch((err) => {
              console.log(err)
          })
    }
}

//-----clear
export const clearShoppingCartItems = () => ({
    type: actionTypes.CLEAR_SHOPPING_CART_ITEMS
})

export const cleartCartList = () => ({
    type: actionTypes.CLEAR_CART_LIST
})
//---action axios
export const axiosAddShoppingCartAction = (data) => ({
    type: actionTypes.REFRESH_CART_LIST,
    data
})

//---axios
export const axiosShowShoppingCartItems = (data) => {
    return (dispatch) => {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios.post('http://localhost:3000/api/cart/list',  {products: data},  {headers})
          .then((res) => {
              console.log(res)
            
          })
          .catch((err) => {
              console.log(err)
          })
    }
}


export const axiosGetShoppingCartList = (token) => {
    return (dispatch) => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get('http://localhost:3000/api/cart')
        .then((res) => {
            const response = res.data.cart_list
            let cartListArr = []
            response.forEach((item) => {
                cartListArr.push({
                    product_id: item.product_id,
                    buy_num: item.buy_num
                })
            })
            let cartList = filterAxiosCartItems(cartListArr)
            const action = showShoppingCartList(cartList)
            dispatch(action)
            return cartListArr
      }).then((res) => {
            const cartItemContent = splitArrCartItems(res)
            const action = axiosAddShoppingCartAction(cartItemContent)
            dispatch(action)        
      })
    }
  }
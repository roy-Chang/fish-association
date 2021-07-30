import * as actionTypes from "../constant";

const defaultState = {
    name: '',
    image: '',
    errorMsg: '',
    isLogin: false
}

export default (state = defaultState, action) => {
    if(action.type === actionTypes.MEMBER_LOGIN_ACTION) {
        const newState = {
            ...state,
            name: action.data.name,
            image: action.data.image,
            isLogin: action.data.isLogin,
        }
        const token = action.data.token
        localStorage.setItem('token', token);
        localStorage.setItem('name', newState.name);
        localStorage.setItem('image', newState.image);
        return newState;
    }
    if(action.type === actionTypes.MEMBER_LOGOUT_ACTION) {
        const newState = {
            name: '',
            image: '',
            errorMsg: '',
            isLogin: action.isLogin
        }       
        return newState;
    }
    
    return state;
}

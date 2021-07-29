import * as actionTypes from "../constant";

const defaultState = {
    errorMsg: '',
    isFetching: false,
    isLogin: false
}

export default (state = defaultState, action) => {
    if(action.type === actionTypes.MEMBER_LOGIN_ACTION) {
        const newState = {
            ...state,
            isLogin: action.data.isLogin,
            errorMsg: action.data.errorMsg
        }       
        return newState;
    }
    if(action.type === actionTypes.MEMBER_LOGOUT_ACTION) {
        const newState = {
            ...state,
            isLogin: action.isLogin
        }       
        return newState;
    }
    
    return state;
}

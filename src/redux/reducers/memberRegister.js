import * as actionTypes from "../constant";

const defaultState = {
    nextStep: false,
    registerSuccess: false,
    msg: '',
    accountRegister: '',
    emailRegister: '',
    passwordRegister: '',
    comfirmPasswordRegister: '',
    nameRegister: '',
    sexRegister: '',
    birthRegister: '',
    phoneRegister: '',
    addressRegister: '',
}

export default (state = defaultState, action) => { 
    if(action.type === actionTypes.MEMBER_REGISTER_ACTION) {
        const {account, email, password, repassword} = action.data
        const newState = {
            ...state,
            nextStep: true,
            accountRegister: account,
            emailRegister: email,
            passwordRegister: password,
            comfirmPasswordRegister: repassword,
        }       
        return newState;
    }
    if(action.type === actionTypes.MEMBER_PREVSTEP_ACTION) {
        const newState = {
            ...state,
            nextStep: action.data
        }       
        return newState;
    }
    if(action.type === actionTypes.MEMBER_REGISTERSTEPTWO_ACTION) {
       //const {name, gender, birth, phone, address} = action.data
        const newState = {
            msg: '',
            accountRegister: '',
            emailRegister: '',
            passwordRegister: '',
            comfirmPasswordRegister: '',
            nameRegister: '',
            sexRegister: '',
            birthRegister: '',
            phoneRegister: '',
            addressRegister: '',
            registerSuccess: action.data.registerSuccess,
            msg: action.data.msg,
        }      
        return newState;
    }
    return state;
}
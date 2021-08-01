import * as actionTypes from "../constant";


const defaultRouter = {
    fromWhere: '',
    toRouter: ''
}

export default (state = defaultRouter, action) => {
    switch (action.type) {
        case actionTypes.JUMP_TO_ROUTER: {
            const newState = {
                ...state,
                fromWhere: action.data.fromWhere,
                toRouter: action.data.toRouter
            }       
            return newState;
        }

        default:
            return state      
    }
    
}
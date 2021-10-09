import {LOG_IN, LOG_OUT} from "../../constants/isAuthConstants";


const initialState={
    isAuth:false
}

export const authReducer = (state=initialState,action) => {
    switch (action.type){
        case LOG_IN:
            return {
                ...state,
                isAuth:true
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth:false
            }
        default:
            return  state

    }
}

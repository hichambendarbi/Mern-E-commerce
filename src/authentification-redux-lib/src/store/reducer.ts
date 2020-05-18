import { Reducer, AnyAction, combineReducers } from 'redux';
import { AuthActions } from './actions';

const initialLogin : AuthLoginState = {
    isAuth : false
}
const loginReducer : Reducer = (state=initialLogin, action : AnyAction) =>{
    switch (action.type) {
        case AuthActions.AUTH_LOGIN_FETCH_USER_SUCCESS:
            localStorage.setItem('TTUID', action.payload.token);   
            return{
                ...state, isAuth : true, username : action.payload.username, userId : action.payload.userId
            };
        case AuthActions.AUTH_TOKEN_NOT_EXIST : 
            return {
                ...state
            }
        case AuthActions.AUTH_TOKEN_VERIFY_FALSE :
            localStorage.removeItem('TTUID');
            return {
                ...state, isAuth : false
            }
        case AuthActions.AUTH_TOKEN_VERIFY_TRUE : 
            if(action.payload.username === null || action.payload.username === undefined){
                return {
                    ...state, isAuth : false
                }
            } else {
                return {
                    ...state, username : action.payload.username, userId : action.payload.userId, isAuth : true
                }
            }
            
        default:
            return {...state};
    }
}

const initialSignup : AuthSignupState= {}
const signupReducer : Reducer = (state=initialSignup, action : AnyAction) =>{
    switch (action.type) {
        case '':            
            return{
                ...state
            };
    
        default:
            return {...state};
    }
}


const initialFP : AuthForgotPasswordState = {}

const fpReducer : Reducer = (state=initialFP, action : AnyAction) =>{
    switch (action.type) {
        case '':            
            return{
                ...state
            };
    
        default:
            return {...state};
    }
}

export default combineReducers({
    login : loginReducer,
    signup : signupReducer,
    fp : fpReducer
})
import { store } from "../../.."
import { AuthActions } from '../store/actions';

export class Auth {

    private email : AuthEmail
    private password : AuthPassword
    private dispatch = store.dispatch
    
    constructor(){
        // on init clear variables
        this.email = '';
        this.password = '';
    }
    /**
     * set email
     */
    setEmail = (email : string) => this.email = email;

    /**
     * set password
     */
    setPassword = (pw : string) => this.password = pw;
    
    /**
     * fetch user and sign in 
     * to @ittyni
     */
    fetchUser = () => store.dispatch({
        type : AuthActions.AUTH_LOGIN_FETCH_USER,
        payload : {
            query :`mutation{users{login(userInput: {email: "${this.email}", password: "${this.password}"}) { userId token username}}}`
        },
        path : 'users'
    })

    /**
     * verify if Logged
     */
    isLogged = () => {
        const token = localStorage.getItem('TTUID')
        this.verifyToken(token)
    }

    /**
     * verify token from server
     */
    verifyToken = (token : string | null) => {
        if(token === null) return this.dispatch({type : AuthActions.AUTH_TOKEN_NOT_EXIST});
        this.dispatch({
            type : AuthActions.AUTH_TOKEN_VERIFY,
            path : 'users',
            payload : { query : `query { verifyToken(token : "${token}"){ userId username }}`}
        })
    }
}
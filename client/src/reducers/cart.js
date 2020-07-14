import {
    ADD_TOCART_LOCAL,
    ADD_TOCART_FAIL,
    GET_TOCART_LOCAL,
    GET_TOCART_FAIL,
    GET_PRODUCT_CART_ID,
    GET_PRODUCT_CART_ID_FAIL,
    GET_ALL_CART,
    ALL_CART_FAIL,
    ADD_TOCART,
    UPDATE_CART
} from '../actions/types'

const initialState = {
    cart: [],
    loading: true,
    leng: 0,
    cartids: [],
    errors: [],
    cartall: [],
    tocart: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case ADD_TOCART_LOCAL:
            return {
                ...state, 
                loading: false,
                cart: payload
            }
        case ADD_TOCART_FAIL:
            return {
                ...state, 
                loading: false,
                cart: payload
            }
        case GET_TOCART_LOCAL:
            return {
                ...state, 
                loading: false,
                cart: payload,
                leng: payload!==null ? payload.length : 0
            }
        case GET_TOCART_FAIL:
            return {
                ...state, 
                loading: false,
                leng: payload
                }
        case GET_PRODUCT_CART_ID:
            localStorage.removeItem("ProductCart")
            return {
                ...state, 
                loading: false,
                cartids: payload
                }

        case GET_PRODUCT_CART_ID_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload
            } 
        case GET_ALL_CART:
            return {
                ...state,
                loading: false,
                cartall: payload
            }
        case ALL_CART_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload
            }
        case UPDATE_CART:
            return {
                ...state,
                loading: false,
                cartall: payload
            }
        case ADD_TOCART:
            return {
                ...state,
                loading: false,
                tocart: payload
            }
        case ADD_TOCART_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload
                }
            default:
                return state;
    }
}
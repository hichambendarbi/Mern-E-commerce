import {
    ADDPRODUCT_SUCCESS,
    ADDPRODUCT_FAIL,
    ADD_COLOR,
    GET_PPRODUCT,
    GET_PRODUCTS,
    UPDATE_PRODUCT,
    GET_ID,
    ADD_PHOTO,
    ADD_SIZE,
    REMOVE_PRODUCT,
    REMOVE_FAIL
    } from '../actions/types'
    
    const initialState = {
        products: [],
        Product: localStorage.getItem('Product'),
        idProduct: null,
        product: null,
        loading: true,
        error: {},
        msg:null
    }
    
    export default function(state =initialState, action) {
         const { type, payload } = action;
    
         switch (type) {
             case ADDPRODUCT_SUCCESS:
                localStorage.setItem('idProduct',payload._id)
                 return{
                     ...state, 
                     product: payload,
                     loading: false
                 };
            case REMOVE_PRODUCT:
                 return {
                     ...state,
                     products: state.products.filter(test => test._id !== payload),
                     loading: false
                 };
             case UPDATE_PRODUCT:
                return{
                    ...state,
                    product: payload,
                    loading: false
                };
            case ADD_COLOR:
                return{
                    ...state, 
                    product: payload, 
                    loading: false
                };
            case ADD_SIZE:
                return{
                    ...state,
                    product: payload,
                    loading: false
                };
            case ADD_PHOTO:
                return{
                    ...state, 
                    product: payload, 
                    loading: false
                }
            case GET_PPRODUCT:
                return{
                    ...state,
                    product: payload,
                    loading: false
                };
                case GET_ID:
                    localStorage.setItem('Product',JSON.stringify(payload))
                    localStorage.setItem('idProduct',payload._id)
                    return{
                        ...state,
                        Product: payload,
                        loading: false
                    };
            case GET_PRODUCTS:
                return{
                    ...state,
                    products: payload,
                    loading: false
                };
             case ADDPRODUCT_FAIL:
                 return{
                     ...state,
                     error: payload,
                     loading: false
                 };  
                    default:
                        return state;
         }
    }
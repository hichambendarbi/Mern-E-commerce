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
} from './types'
import { setAlert } from './alert'
import axios from 'axios'

export const addTocartLocal = (formData) => async dispatch => {
    localStorage.setItem("ProductCart", JSON.stringify(formData))
    let data = JSON.parse(localStorage.getItem("ProductCart"))
    dispatch(setAlert(`Produit Ajouter avec success`, 'success')) 
    try {
        dispatch({
            type:  ADD_TOCART_LOCAL,  
            payload: data
        })
    } catch (err) {
             dispatch({
                 type: ADD_TOCART_FAIL
             }) 
    }
}

export const getTocartLocal = () => dispatch => {
     let data = JSON.parse(localStorage.getItem("ProductCart"))
     try {
         dispatch({
             type:  GET_TOCART_LOCAL,  
             payload: data
         })
     } catch (err) {
              dispatch({
                  type: GET_TOCART_FAIL
              }) 
     }
 }

 export const getProductCartById = (isAuth) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const cart = JSON.parse(localStorage.getItem("ProductCart"))   
    var cartFinal = []
    
        // Get Product from DB by ID product exist in localStorage
        if(cart!==null) {
            for(var i=0; i<cart.length; i++){
                const test = await axios.get(`/api/product/${cart[i].pI}`)
                cartFinal.push( test.data ) 
           }
        }
 

        console.log(cartFinal)
        
    var cartDB = []
        // Save all product cart exist in localStorage on DB
        for(var i=0; i<cartFinal.length; i++){
            const obj = { 
                idProduct : cartFinal[i]._id,
                productName: cartFinal[i].productName,
                quantity: cartFinal[i].quantity,
                productBrand: cartFinal[i].brand,
                productPrice: cartFinal[i].priceS,
                imgProduct: cartFinal[i].image[0].productImg,
                quantityCart: 1
             }
            console.log(cartFinal[i].image[0].productImg)
            const res = await axios.post(`/api/cart`, obj, config);
            cartDB.push(res.data)
        }
        
            
        try {
            dispatch({
                type:  GET_PRODUCT_CART_ID,  
                payload: isAuth ? cartDB : cartFinal.data
            })
        } catch (err) {
                 dispatch({
                     type: GET_PRODUCT_CART_ID_FAIL
                 }) 
        }
      
 }

//  Get all product stored on DB Cart 
export const getAllCart = () => async dispatch => {
    
    const res = await axios.get('/api/cart')
    try {
        dispatch({
            type: GET_ALL_CART,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ALL_CART_FAIL
        })
    }

}

export const addToCart = (formData) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
   
    var cartFinal = {}
    if(formData!==null) {
            const test = await axios.get(`/api/product/${formData.pI}`)
             cartFinal = test.data
    }

    // console.log(cartFinal.image[0].productImg)
  
    const obj = { 
        idProduct : cartFinal._id,
        productName: cartFinal.productName,
        quantity: cartFinal.quantity,
        productBrand: cartFinal.brand,
        productPrice: cartFinal.priceS,
        imgProduct: cartFinal.image[0].productImg,
        quantityCart: 1
     }
    const res = await axios.post(`/api/cart`, obj, config);
    console.log(res.data)
    try {
        dispatch({
            type: ADD_TOCART,  
            payload: res.data
        })
        
    } catch (err) {
             dispatch({
                 type: ADD_TOCART_FAIL
             }) 
    }
}

// Update Quantity Cart from user
export const updateCart = (id, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await axios.post(`/api/cart/${id}`, formData, config);
    try {
        dispatch({
            type: UPDATE_CART,  
            payload: res.data
        })
        dispatch(setAlert('Quantite changer avec success', 'success'))
    } catch (err) {
        dispatch({
            type: ADD_TOCART_FAIL
        }) 
    }
}
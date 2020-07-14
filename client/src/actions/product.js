import axios from 'axios'
import { setAlert } from './alert'
import {ADDPRODUCT_SUCCESS,
        ADDPRODUCT_FAIL,
        ADD_COLOR,
        GET_PPRODUCT,
        ADD_SIZE,
        GET_PRODUCTS,
        UPDATE_PRODUCT,
        GET_ID,
        ADD_PHOTO,
        REMOVE_FAIL,
        REMOVE_PRODUCT,
        ADD_TOCART,
        ADD_TOCART_FAIL
} from './types'
import { Children } from 'react'


// Add new Product
export const newProduct = (formData, productCategoryID) => async dispatch => {
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

 try {
     const res = await axios.post(`/api/product/${productCategoryID}`, formData, config);
 
     dispatch({
         type: ADDPRODUCT_SUCCESS,
         payload: res.data 
     })
     
     dispatch(setAlert('Produit Ajouter avec success', 'success'))
     if(res.data) {
       window.location.href = "/administration/complet-product-adding";
     }
        
 } catch (err) {
     const errors = err.response.data.errors;
     if(errors) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
     }
     dispatch({
         type: ADDPRODUCT_FAIL
     })
 }
}

// Add new Color to product
export const addNewColor = (formData, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
     try {
         const res = await axios.put(`/api/product/color/${id}`, formData, config)
     
         dispatch({
             type: ADD_COLOR,
             payload: res.data 
         })
         
         dispatch(setAlert('Coleur Ajouter avec success', 'success'))
            
     } catch (err) {
         const errors = err.response.data.errors;
         if(errors) {
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
         }
         dispatch({
             type: ADDPRODUCT_FAIL
         })
     }
}

// Add new Size to product
export const addNewSize = (formData, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
     try {
         const res = await axios.put(`/api/product/size/${id}`, formData, config)
         dispatch({
             type: ADD_SIZE,
             payload: res.data 
         })
         dispatch(setAlert('Details des mesures Ajouter avec success', 'success'))
            
     } catch (err) {
         const errors = err.response.data.errors;
         if(errors) {
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
         }
         dispatch({
             type: ADDPRODUCT_FAIL
         })
     }
}

// Add new Photo to product
export const addNewPhoto = (formData, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
     try {
         const res = await axios.put(`/api/product/image/${id}`, formData, config)
        
         dispatch({
             type: ADD_PHOTO,
             payload: res.data 
         })
         
         dispatch(setAlert('Photo ajoute avec success', 'success'))
            
     } catch (err) {
         const errors = err.response.data.errors;
         if(errors) {
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
         }
         dispatch({
             type: ADDPRODUCT_FAIL
         })
     }
}

// GET PRODUCT
export const getProduct = (id) => async dispatch => { 
try {
    const res = await axios.get(`/api/product/${id}`)
    dispatch({
        type:  GET_PPRODUCT, 
        payload: res.data
    })
} catch (err) {
         dispatch({
             type: ADDPRODUCT_FAIL
         }) 
}
}

export const getId = (data) => dispatch => {
    try {
        dispatch({
            type:  GET_ID,
            payload: data
        })
    } catch (err) {
             dispatch({
                 type: ADDPRODUCT_FAIL 
             }) 
    }
    }

// GET ALL RPPRODUCT 

export const getAllProduct = () => async dispatch => {
    try {
        const res = await axios.get('/api/product');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ADDPRODUCT_FAIL
        }) 
    }
}

// Update Product By ID
export const updateProduct = (formData, productCategoryID, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
     try {
         const res = await axios.post(`/api/product/${productCategoryID}/${id}`, formData, id, config);
     
         dispatch({
             type: UPDATE_PRODUCT,
             payload: res.data 
         })
         
         dispatch(setAlert('Produit modifier avec success', 'success'))
         if(res.data) {
           window.location.href = "/administration/complet-product-adding";
         }
            
     } catch (err) {
         const errors = err.response.data.errors;
         if(errors) {
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
         }
         dispatch({
             type: ADDPRODUCT_FAIL
         })
     }
    }

// Delete Product by ID from stock
// Delete Appointment
export const removeProductStock = id => async dispatch => {
    try {
        
        await axios.delete(`/api/product/${id}`);
        dispatch({
            type: REMOVE_PRODUCT,
            payload: id
        })
        dispatch(setAlert("Produit supprimer avec succes", 'success'))
    } catch (err) {
        dispatch({
            type: REMOVE_FAIL
        })
    }
}

// Add To Cart
export const addToCart = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
     try {
         const res = await axios.post(`/api/cart`, formData, config);
     
         dispatch({
             type: ADD_TOCART,
             payload: res.data 
         })
         
         dispatch(setAlert('Produit ajouté à votre panier', 'success'))
     } catch (err) {
         const errors = err.response.data.errors;
         if(errors) {
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
         }
         dispatch({
             type: ADD_TOCART_FAIL
         })
     }
    }
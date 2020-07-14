import axios from 'axios'
import { setAlert } from './alert'
import {GET_GATEGORYS,
        CATEGORY_ERROR,
        ADD_CATEGORY
} from './types'

// Add new category
export const addNewCategory = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
     try {
         const res = await axios.post(`/api/category`, formData, config);
     
         dispatch({
             type: ADD_CATEGORY,
             payload: res.data 
         })
         
         dispatch(setAlert('Categorie Ajouter avec succes', 'success'))
        //  if(res.data) {
        //    window.location.href = "/administration/complet-product-adding";
        //  }
            
     } catch (err) {
         const errors = err.response.data.errors;
         if(errors) {
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
         }
         dispatch({
             type: CATEGORY_ERROR
         })
     }
}

// Get all category
export const getCategorys = () => async dispatch => {

 try {
     const res = await axios.get('/api/category');
 
     dispatch({
         type: GET_GATEGORYS,
         payload: res.data 
     })
     
 } catch (err) {
    dispatch({
        type: CATEGORY_ERROR,
        payload: {
            msg: err.response.statusText,
            status: err.response.status
        }
    })
 }
}
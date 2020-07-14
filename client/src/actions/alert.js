import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT} from './types'


let id = 1;

export const setAlert = (msg, alertType,st, tr) => dispatch => {
      const id = uuidv4();
      dispatch ({
          type: SET_ALERT, 
          payload: {msg, alertType, id,st,tr}
      })
      setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: {id: 1}
      }), 2000)
}

export const removeAlert = () => dispatch => {
dispatch({
    type: REMOVE_ALERT,
    payload: {id} 
  })
}
import { Reducer, AnyAction } from 'redux';
import { ShiftActions } from './actions';

const initState : LaboShiftState = {}

export const shiftReducer : Reducer = (state=initState, action : AnyAction) =>{
    switch (action.type) {
    
        case ShiftActions.LAB_LABO_SHIFT_FETCH_ALL_SUCCESS:
            return {...state, shifts : action.payload.fetchAllShifts};
    
        default:
            return {...state};
    }

}
import { all, fork, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { tryFetching } from '../../../Store/config'
import { ShiftActions } from './actions';

/**
 * labo fetch details
 */
function* shiftAddNew({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        ShiftActions.LAB_LABO_SHIFT_ADD_NEW_ERROR,
        ShiftActions.LAB_LABO_SHIFT_ADD_NEW_SUCCESS
    )
}
/**
 * labo fetch details
 */
function* shiftFetchAll({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        ShiftActions.LAB_LABO_SHIFT_FETCH_ALL_ERROR,
        ShiftActions.LAB_LABO_SHIFT_FETCH_ALL_SUCCESS
    )
}
//watcher func dispatcher
function* watchLabLaboShift(){

    // fetch tests form server 
    yield takeEvery(ShiftActions.LAB_LABO_SHIFT_ADD_NEW, shiftAddNew)
    yield takeEvery(ShiftActions.LAB_LABO_SHIFT_FETCH_ALL, shiftFetchAll)
}

export function* LabLaboShiftSaga(){
    yield all([fork(watchLabLaboShift)])
}
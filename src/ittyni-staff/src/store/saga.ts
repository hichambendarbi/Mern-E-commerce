import { all, fork, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { tryFetching } from '../../../Store/config'
import { StaffActions } from './actions';




/**
 * labo fetch details
 */
function* StaffAddNew({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        StaffActions.ADD_EMPLOYER_ERROR,
        StaffActions.ADD_EMPLOYER_SUCCESS
    )
}
/**
 * labo fetch details
 */
function* StaffFetchAll({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        StaffActions.LIST_ALL_EMPLOYERS_ERROR,
        StaffActions.LIST_ALL_EMPLOYERS_SUCCESS
    )
}
//watcher func dispatcher
function* watchLabLaboStaff(){

    // fetch tests form server 
    yield takeEvery(StaffActions.ADD_EMPLOYER, StaffAddNew)
    yield takeEvery(StaffActions.LIST_ALL_EMPLOYERS, StaffFetchAll)
}

export function* LabLaboStaffSaga(){
    yield all([fork(watchLabLaboStaff)])
}
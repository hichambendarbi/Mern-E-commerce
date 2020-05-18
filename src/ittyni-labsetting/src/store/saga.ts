import { all, fork, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { tryFetching } from '../../../Store/config'
import {SettingActions} from '../store/actions'


/**
 * labo fetch setting departement
 */
function* fetchDepartements({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT_ERROR,
        SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT_SUCCESS
    )
}
/**
 * labo add new setting departement
 */
function* addDepartement({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT_ERROR,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT_SUCCESS
    )
}
/**
 * labo fetch setting Holiday
 */
function* fetchHolidays({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_LIST_HOLIDAY_ERROR,
        SettingActions.LAB_LABO_SETTING_LIST_HOLIDAY_SUCCESS
    )
}
/**
 * labo add new setting Holiday
 */
function* addHoliday({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_HOLIDAY_ERROR,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_HOLIDAY_SUCCESS
    )
}
/**
 * labo fetch setting Leave
 */
function* fetchLeaves({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_LIST_LEAVE_ERROR,
        SettingActions.LAB_LABO_SETTING_LIST_LEAVE_SUCCESS
    )
}
/**
 * labo add new setting Leave
 */
function* addLeave({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_LEAVE_ERROR,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_LEAVE_SUCCESS
    )
}
/**
 * labo fetch setting Autoamtes
 */
function* fetchAutomates({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_LIST_AUTOMATE_ERROR,
        SettingActions.LAB_LABO_SETTING_LIST_AUTOMATE_SUCCESS
    )
}
/**
 * labo add new setting Autoamtes
 */
function* addAutomate({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_AUTOMATE_ERROR,
        SettingActions.LAB_LABO_SETTING_ADD_NEW_AUTOMATE_SUCCESS
    )
}


//watcher func dispatcher
function* watchLabLaboSetting(){

    // departement
    yield takeEvery(SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT, fetchDepartements)
    yield takeEvery(SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT, addDepartement)
    // Holiday
    yield takeEvery(SettingActions.LAB_LABO_SETTING_LIST_HOLIDAY, fetchHolidays)
    yield takeEvery(SettingActions.LAB_LABO_SETTING_ADD_NEW_HOLIDAY, addHoliday)
    // Leave
    yield takeEvery(SettingActions.LAB_LABO_SETTING_LIST_LEAVE, fetchLeaves)
    yield takeEvery(SettingActions.LAB_LABO_SETTING_ADD_NEW_LEAVE, addLeave)
    // automate
    yield takeEvery(SettingActions.LAB_LABO_SETTING_LIST_AUTOMATE, fetchAutomates)
    yield takeEvery(SettingActions.LAB_LABO_SETTING_ADD_NEW_AUTOMATE, addAutomate)
}

export function* LabLaboSettingSaga(){
    yield all([fork(watchLabLaboSetting)])
}
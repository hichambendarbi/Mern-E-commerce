import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../Store/config'
import { AuthActions } from './actions';
import { AnyAction } from 'redux';

function* handleFetchUser({path, payload}: any){

    try {
        const res = yield call(config.callApi, 'post', config.api, path, payload);
        
        if(res.errors){
            yield put({type : AuthActions.AUTH_LOGIN_FETCH_USER_ERROR ,error : res.errors[0].message})
        } else {
            yield put({ type : AuthActions.AUTH_LOGIN_FETCH_USER_SUCCESS, payload : res.data.users.login })
        }
    } catch(e) {
        throw new Error(e);
    }
}

/**
 * verify token
 */
function* handleVerifyToken({path, payload} : AnyAction){

    try {
        const res = yield call(config.callApi, 'post', config.api, path, payload);

        if(res.errors){
            yield put({type : AuthActions.AUTH_TOKEN_VERIFY_FALSE ,error : res.errors[0].message})
        } else {
            yield put({type : AuthActions.AUTH_TOKEN_VERIFY_TRUE, payload : res.data.verifyToken})
        }

    } catch(e) {
        throw new Error(e);
    }

}

function* watchFetchUser(){
    yield takeEvery(AuthActions.AUTH_LOGIN_FETCH_USER, handleFetchUser)
    yield takeEvery(AuthActions.AUTH_TOKEN_VERIFY, handleVerifyToken)
}

function* AuthSaga(){
    yield all([fork(watchFetchUser)])
}

export default AuthSaga;
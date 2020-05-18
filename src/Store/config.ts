import { call, put } from "redux-saga/effects";

export const api = 'http://localhost:8080/api';

export async function callApi(method: string, url: string, path: string, data?: any) {
    const res = await fetch(`${url}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Beer ${localStorage.getItem('TTUID')}`
      },
      body: JSON.stringify(data)
    })
    return res.json()
  }

export function* tryFetching(path: string, payload : string, actionWhenFailed : string, actionWhenSuccesses : string){
    try{
        const res = yield call(callApi, 'post', api, path, payload );

        if(!res) {
            yield put({
                type: actionWhenFailed, 
                error : res.errors[0].message
            })
        }

        else {

            yield put({
                type : actionWhenSuccesses, 
                payload : res.data
            })
        }

    } catch(e) {
        throw new Error(e); 
    }
}
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

//===> from saga middleware
import { fork, all } from "redux-saga/effects";
import  AuthReducer  from '../authentification-redux-lib/index';
import { AuthSaga } from '../authentification-redux-lib/index';
// import { AuthState } from '../components/authentification-redux-lib/src/types';

// personal module
// import { personalReducer } from "../labpersonal-ittyni/src/store/reducer";
import { staffReducer } from '../ittyni-staff/src/store/reducer';
import { LabLaboStaffSaga } from '../ittyni-staff/src/store/saga';
import { shiftReducer } from '../ittyni-garde/src/store/reducer';


// setting imports 
import { settingReducer } from '../ittyni-labsetting/src/store/reducer';
import { LabLaboSettingSaga } from '../ittyni-labsetting/src/store/saga';
import { LabLaboShiftSaga } from "../ittyni-garde/src/store/saga";


export const createRootReducer = (history: History) =>
  combineReducers({
    auth   : AuthReducer,
    garde : shiftReducer,
    staff: staffReducer /* reducer khfifff */,
    setting : settingReducer,
    router: connectRouter(history) //hada makaynch fe state
  });
// mazian daba
export function* rootSaga() {
  yield all([
    //  Auth
    fork(AuthSaga),
    //  Staff
    fork(LabLaboStaffSaga),
    //  Staff
    fork(LabLaboShiftSaga),
    // setting saga
    fork(LabLaboSettingSaga)
    //  Gards
    // Tickets
  ]);
}
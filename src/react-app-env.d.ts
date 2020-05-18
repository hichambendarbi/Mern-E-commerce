/// <reference types="react-scripts" />
/// <reference types="./ittyni-staff" />
/// <reference types="./ittyni-garde" />
/// <reference types="./ittyni-labsetting" />
/// <reference types="./authentification-redux-lib" />

// Globals
type PersonCivility = string;
type PersonFirstName = string;
type PersonLastName = string;
type PersonEmail = string;
interface Person {
  civility?: PersonCivility;
  firstName: PersonFirstName;
  lastName: PersonLastName;
  email?: PersonEmail;
}

interface LabCentralState {
  auth : AuthState
  staff?: LabStaffState; 
  garde: LaboShiftState;
  setting? : LaboSetting 
  router: RouterState;
}

// Global Interface
interface Window {
  INITIAL_REDUX_STATE: any;
}

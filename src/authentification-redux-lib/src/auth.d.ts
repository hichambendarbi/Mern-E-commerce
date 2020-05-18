type AuthID = string
type AuthEmail = string
type AuthUsername = string
type AuthPassword = string
type Authenticated = boolean
type AuthConfirmPassword = string

type AuthPath = string;

interface AuthToken {
    token : string
    expiredPeriod? : number
}

interface AuthLoginState {
    isAuth      : Authenticated
    username?   : AuthUsername
    userId?     : AuthID
}

interface AuthSignupState {
    email ?          : AuthEmail
    password  ?      : AuthPassword
    confirmPassword ?: AuthConfirmPassword
}

interface AuthForgotPasswordState {
    email ? : AuthEmail
}

interface AuthState {
    login      : AuthLoginState
    signup     : AuthSignupState
    fp         : AuthForgotPasswordState
}
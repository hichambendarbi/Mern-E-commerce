//Login page actions
export enum AuthActions{
    /**
     * fetching user
     */
    AUTH_LOGIN_FETCH_USER               = '@@login/AUTH_LOGIN_FETCH_USER',
    AUTH_LOGIN_FETCH_USER_ERROR         = '@@login/AUTH_LOGIN_FETCH_USER_ERROR',
    AUTH_LOGIN_FETCH_USER_SUCCESS       = '@@login/AUTH_LOGIN_FETCH_USER_SUCCESS',

    /**
     * verify ifLogged
     */
    AUTH_TOKEN_VERIFY                   = '@@auth/AUTH_TOKEN_VERIFY',
    AUTH_TOKEN_NOT_EXIST                = '@@auth/AUTH_TOKEN_NOT_EXIST',    
    AUTH_TOKEN_VERIFY_TRUE              = '@@auth/AUTH_TOKEN_VERIFY_TRUE',
    AUTH_TOKEN_VERIFY_FALSE             = '@@auth/AUTH_TOKEN_VERIFY_FALSE',
}
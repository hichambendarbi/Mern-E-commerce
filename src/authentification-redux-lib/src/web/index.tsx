import * as React from 'react';
import { AuthFooter } from './authFooter'
import { AuthContainer, AuthContent, LoginGlobalStyle } from './authBody'
import { Brand } from './authBrand'
import { Route, Redirect } from 'react-router-dom';
import {LoginComponent} from './login'
import { Signup } from './signup'
import { ResetPassword } from './resetpassword'
import { Auth } from '../controller/auth';
import { useSelector } from 'react-redux';

interface IAuthComponentProps {
  isAuth : boolean
  username : string
  userId : string
}

export const AuthComponent: React.FunctionComponent<IAuthComponentProps> = ({isAuth, username, userId}) => {
  const labtests = new Auth()
    labtests.isLogged()
  

    isAuth = useSelector((state: any)=> state.auth.login.isAuth);
    username = useSelector((state: any)=> state.auth.login.username);
    userId = useSelector((state: any)=> state.auth.login.userId);
  

  if(!isAuth){
    return (
      <>
        <LoginGlobalStyle />
        <AuthContainer>
          <Brand />
          <AuthContent>
              
              <Route path={`/auth/login`} component={LoginComponent} />
  
              <Route path={`/auth/signup`} component={Signup} />
  
              <Route path={`/auth/reset-password`} component={ResetPassword} /> 
  
              <Redirect to={`/auth/login`} />
  
          </AuthContent>
          <AuthFooter />
        </AuthContainer>
  
      </>
    );
  } else {
    
    return (<Redirect to={{
      pathname : `/admin/${username}/`,
      state : {
        isAuth : isAuth,
        userId : userId,
        username : username
      }
    } } />)
  }
};

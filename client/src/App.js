'use strict';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
// Globale Route components
import Navbar from './components/layout/Navbar'
import ContainerAcceuil from './components/layout/Acceuil'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {GlobalContainer} from './components/commons/Assets'
import Alert from './components/layout/Alert'
import PrivateRoute from './components/routesProt/PrivateRoute' 
// Product Import Components
import Products from './components/dashboard/products/Products'
import NewProduct from './components/dashboard/products/NewProduct'
import UpdateProduct from './components/dashboard/products/UpdateProduct'
import CompletProduct from './components/dashboard/products/CompletProduct'
import DisplaySearch from './components/dashboard/products/DisplaySearch'
// Recouver password 
import SendEmail from './components/recouver/SendEmail'
import UpdatePassword from './components/recouver/UpdatePassword'
import Cart from './components/cart/Cart'
// Our Redux import
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
// import { getProductCartById } from './actions/cart'
import  setAuthToken  from './utils/setAuthToken'
import DisplayProduct from './components/dashboard/products/DisplayProduct'
if(localStorage.token) {
   setAuthToken(localStorage.token)
}


const App = () =>{ 
   useEffect(()=> {
      store.dispatch(loadUser());
   }, [])
   
   const LoginContainer = () => (
      <Fragment >
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
      </Fragment>
    )
    const RegisterContainer = () => (
      <Fragment >
        <Route exact path="/" render={() => <Redirect to="/register" />} />
        <Route path="/register" component={Register} />
      </Fragment>
    )

    const DefaultContainer = (props) => (
      <Fragment>
          <Navbar/>
          <Route exact path="/" component={ ContainerAcceuil }/> 
          <PrivateRoute exact path="/products" component={ Products }/>
          <Route exact path="/administration/newProduct" component={ NewProduct }/>
          <Route exact path="/administration/updateProduct" component={ UpdateProduct }/>
          <PrivateRoute exact path="/administration/complet-product-adding" component={CompletProduct}/>
          <Route exact path="/searchArticle" component={DisplaySearch}/>
          <Route exact path="/recuperationMotDePasse" component={SendEmail}/>
          <Route
              path="/password/:userId/:token"
              component={({match}) => <UpdatePassword userId={match.params.userId} token={match.params.token} />}/>
          <Route exact path='/displayProduct' component={DisplayProduct}/>
          <Route exact path='/cart' component={Cart}/>
      </Fragment>
       )

  return (
     <Provider store={store}>
    <Router>
       <Fragment>
          <GlobalContainer>
             <Alert/>
             <Switch>
             <Route exact path="/(login)" component={LoginContainer}/>
             <Route exact path="/(register)" component={RegisterContainer}/>
             <Route component={DefaultContainer}/>
             </Switch>
          </GlobalContainer>
       </Fragment>
    </Router>
    </Provider>
  )
}


export default App;

import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import FloatingLabelInput from '../commons/FloatingLabelInput'
import {Retour,AuthNavigation,Links,ContainerInputs,Button,FooterLogin,AuthContainer, LinkRec} from "../commons/Assets"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated, cart:{cart} }) => {
    // add new Appointment

    const [formData, setFormData] = useState ({ 
        email :'',
        password:''
    });
    const {
      email,
      password
      } = formData;
      const onChangeAdd = e => setFormData({...formData, [e.target.name]:e.target.value})

      const onSubmit = async e => {
          e.preventDefault();
          login(email, password)
      }

      // Redirect if logged in 
      if(isAuthenticated) {
          return <Redirect to='/'/>
      }

      
    return (
     <AuthContainer>
         <Retour to="/">3DSTOR<span style={{color:"#ff8100"}}>E</span></Retour>
         <AuthNavigation>
             <Links className="test" to="/login" style={{borderBottom:"2px solid #f5770b", color: "#f5770b"}} >SE CONNECTER</Links>
             <Links className="test" to="/register" >CREER UN COMPTE</Links>
         </AuthNavigation>
         <ContainerInputs>
               <FloatingLabelInput placeholder="E-mail" name="email" value={email}  onChange={e => onChangeAdd(e)}/>
               <FloatingLabelInput placeholder="Mot de passe" name="password" value={password}  onChange={e => onChangeAdd(e)}/>
             <Button onClick={e=> onSubmit(e)}>SE CONNECTER</Button>
             <FooterLogin>
                 <span>J'arrive pas connecter a mon compte 3DSTORE</span>
                 <LinkRec to="/recuperationMotDePasse">Mot de passe oublie ?</LinkRec>
             </FooterLogin>
         </ContainerInputs>
     </AuthContainer>
    )
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    cart: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    cart: state.cart
})

export default connect(mapStateToProps , {login})(Login)

